import * as React from "react"
import Modal from "../common/Modal/Modal"
import Button from "../common/Button/Button"
import Checkbox from "../common/Checkbox/Checkbox"
import PreferencesList, {
  CheckboxSchema,
} from "./PreferencesList/PreferencesList"
import * as S from "./Preferences.styled"

const preferencesTreeV2: Record<string, CheckboxSchema> = {
  attention: {
    isChecked: false,
  },
  satisfation: {
    isChecked: false,
  },
  salary: {
    isChecked: false,
    children: {
      b2b: {
        isChecked: false,
      },
      b2c: {
        isChecked: true,
      },
    },
  },
  location: {
    isChecked: false,
  },
}

const Preferences = () => {
  const [isChecked, setIsChecked] = React.useState(false)
  const [preferences, setPreferences] = React.useState(preferencesTreeV2)

  const updateChild = (name: string) =>
    setPreferences((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        isChecked: !prevState[name].isChecked,
      },
    }))

  const updateSubChild = (
    name: string,
    subChildName: string,
    subChild: CheckboxSchema
  ) =>
    setPreferences((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        children: {
          ...prevState[name].children,
          [subChildName]: subChild,
        },
      },
    }))

  return (
    <Modal>
      <PreferencesList
        preferences={preferences}
        updateChild={updateChild}
        updateSubChild={updateSubChild}
      />
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
        <Modal.Collapse
          header={
            <S.Row>
              <Modal.Title>Employees</Modal.Title>
              <Modal.Description>1 of 9 services selected</Modal.Description>
            </S.Row>
          }
        >
          Lorem ipsum dolor sit amet.
        </Modal.Collapse>
        <Modal.Collapse
          header={
            <S.Row>
              <Modal.Title>Company Management</Modal.Title>
              <Modal.Description>2 of 6 services selected</Modal.Description>
            </S.Row>
          }
        >
          <Checkbox
            label="Team"
            isChecked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <Checkbox
            label="Power"
            isChecked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
        </Modal.Collapse>
      </Modal.Section>
      <Modal.Section>
        <Button preset="primary">Add preferences</Button>
      </Modal.Section>
    </Modal>
  )
}

export default Preferences
