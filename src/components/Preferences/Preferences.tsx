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
  type CheckboxSchema,
} from "./Preferences.data"

const Preferences = () => {
  const [employeesPreferences, setEmployeesPreferences] =
    React.useState(employeesTree)
  const [companyPreferences, setCompanyPreferences] =
    React.useState(companyTree)
  const [performancePreferences, setPerformancePreferences] =
    React.useState(performanceTree)
  const [workspacesPreferences, setWorkspacesPreferences] =
    React.useState(workspacesTree)

  const updateChild = (name: string) =>
    setEmployeesPreferences((prevState) => ({
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
    setEmployeesPreferences((prevState) => ({
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
          <PreferencesList
            preferences={employeesPreferences}
            updateChild={updateChild}
            updateSubChild={updateSubChild}
          />
        </Modal.Collapse>
        <Modal.Collapse
          header={
            <S.Row>
              <Modal.Title>Company Management</Modal.Title>
              <Modal.Description>2 of 6 services selected</Modal.Description>
            </S.Row>
          }
        >
          <PreferencesList
            preferences={companyPreferences}
            updateChild={updateChild}
            updateSubChild={updateSubChild}
          />
        </Modal.Collapse>
        <Modal.Collapse
          header={
            <S.Row>
              <Modal.Title>Company Performance</Modal.Title>
              <Modal.Description>2 of 6 services selected</Modal.Description>
            </S.Row>
          }
        >
          <PreferencesList
            preferences={performancePreferences}
            updateChild={updateChild}
            updateSubChild={updateSubChild}
          />
        </Modal.Collapse>
        <Modal.Collapse
          header={
            <S.Row>
              <Modal.Title>Workspaces Management</Modal.Title>
              <Modal.Description>2 of 6 services selected</Modal.Description>
            </S.Row>
          }
        >
          <PreferencesList
            preferences={workspacesPreferences}
            updateChild={updateChild}
            updateSubChild={updateSubChild}
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
