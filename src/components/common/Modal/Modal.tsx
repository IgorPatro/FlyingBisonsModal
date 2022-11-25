import React from "react"
import ModalSection from "./ModalSection/ModalSection"
import ModalTitle from "./ModalTitle/ModalTitle"
import ModalDescription from "./ModalDescription/ModalDescription"
import ModalCollapse from "./ModalCollapse/ModalCollapse"
import * as S from "./Modal.styled"

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Modal = ({ children }: Props) => {
  return <S.ModalWrapper>{children}</S.ModalWrapper>
}

Modal.Section = ModalSection
Modal.Title = ModalTitle
Modal.Description = ModalDescription
Modal.Collapse = ModalCollapse

export default Modal
