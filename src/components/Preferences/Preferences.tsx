import Modal from "../common/Modal/Modal"
import Button from "../common/Button/Button"
import * as S from "./Preferences.styled"

const Preferences = () => {
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
        <Button preset="primary">Add preferences</Button>
      </Modal.Section>
    </Modal>
  )
}

export default Preferences
