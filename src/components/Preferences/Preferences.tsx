import * as React from "react"
import Modal from "../common/Modal/Modal"
import Button from "../common/Button/Button"
import PreferencesList from "./PreferencesList/PreferencesList"
import * as S from "./Preferences.styled"
import {
  employeesTree,
  companyTree,
  performanceTree,
  workspacesTree,
  preferencesRenderList,
} from "./Preferences.data"
import { type State, type Action } from "./Preferences.types"
import {
  calculateChecked,
  calculateTotalOptions,
  toggleChild,
  toggleSubChild,
} from "./Preferences.utils"

export const initialState: State = {
  employees: employeesTree,
  company: companyTree,
  performance: performanceTree,
  workspaces: workspacesTree,
}

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
        {preferencesRenderList.map(({ name, preference }) => (
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
