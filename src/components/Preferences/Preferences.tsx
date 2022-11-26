import * as React from "react"
import Modal from "../common/Modal/Modal"
import Button from "../common/Button/Button"
import PreferencesList from "./PreferencesList/PreferencesList"
import * as S from "./Preferences.styled"
import {
  initialState,
  type State,
  type Preferences as IPreferences,
  preferencesRenderer,
} from "./Preferences.data"

const toggleChild = (childName: string, prevState: IPreferences) => ({
  ...prevState,
  [childName]: {
    ...prevState[childName],
    isChecked: !prevState[childName].isChecked,
  },
})

const toggleSubChild = (
  childName: string,
  subChildName: string,
  prevState: IPreferences
) => ({
  ...prevState,
  [childName]: {
    ...prevState[childName],
    children: toggleChild(subChildName, prevState[childName].children!),
  },
})

interface ToggleChild {
  type: "TOGGLE_CHILD"
  payload: {
    preferenceName: keyof State
    childName: string
  }
}

interface ToggleSubChild {
  type: "TOGGLE_SUB_CHILD"
  payload: {
    preferenceName: keyof State
    childName: string
    subChildName: string
  }
}

export type Action = ToggleChild | ToggleSubChild

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_CHILD": {
      const { preferenceName, childName } = action.payload

      return {
        ...state,
        [preferenceName]: toggleChild(childName, state[preferenceName]),
      }
    }
    case "TOGGLE_SUB_CHILD": {
      const { preferenceName, childName, subChildName } = action.payload

      return {
        ...state,
        [preferenceName]: toggleSubChild(
          childName,
          subChildName,
          state[preferenceName]
        ),
      }
    }
  }
}

const calculateChecked = (preferences: IPreferences): number => {
  let count = 0

  Object.values(preferences).forEach((child) => {
    if (child.isChecked) {
      count++
    }

    if (child.children) {
      count += calculateChecked(child.children)
    }
  })

  return count
}

const calculateTotalOptions = (preferences: IPreferences): number => {
  let count = 0

  Object.values(preferences).forEach((child) => {
    count++

    if (child.children) {
      count += calculateTotalOptions(child.children)
    }
  })

  return count
}

const Preferences = () => {
  const [preferences, dispatch] = React.useReducer(reducer, initialState)

  return (
    <Modal>
      <Modal.Section>
        <Modal.Title>Selected company</Modal.Title>
        <S.Row>
          <S.RingIcon />
          <S.CompanyName>1-2300423445</S.CompanyName>
          <Modal.Description>Company XYZ</Modal.Description>
        </S.Row>
      </Modal.Section>
      <Modal.Section>
        <Modal.Title>Chosen preferences</Modal.Title>
        <Modal.Description>
          You don't have any preferences chosen.
        </Modal.Description>
      </Modal.Section>
      <Modal.Section>
        {preferencesRenderer.map(({ name, preference }) => (
          <Modal.Collapse
            key={preference}
            header={
              <S.Row>
                <Modal.Title>{name}</Modal.Title>
                <Modal.Description>
                  {calculateChecked(preferences[preference])} of{" "}
                  {calculateTotalOptions(preferences[preference])} services
                  selected
                </Modal.Description>
              </S.Row>
            }
          >
            <PreferencesList
              preferences={preferences[preference]}
              preferenceName={preference}
              dispatch={dispatch}
            />
          </Modal.Collapse>
        ))}
      </Modal.Section>
      <Modal.Section>
        <Button preset="primary">Add preferences</Button>
      </Modal.Section>
    </Modal>
  )
}

export default Preferences
