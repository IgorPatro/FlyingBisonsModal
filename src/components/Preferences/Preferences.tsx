import * as React from "react"
import Modal from "../common/Modal/Modal"
import Button from "../common/Button/Button"
import Checkbox from "../common/Checkbox/Checkbox"
import * as S from "./Preferences.styled"

const Preferences = () => {
  const [isChecked, setIsChecked] = React.useState(false)

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
