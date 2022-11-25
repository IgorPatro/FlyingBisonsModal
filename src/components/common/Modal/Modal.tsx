import React from "react"
import ModalSection from "./ModalSection/ModalSection"
import * as S from "./Modal.styled"

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const Modal = ({ children }: Props) => {
  return <S.ModalWrapper>{children}</S.ModalWrapper>
}

Modal.Section = ModalSection

export default Modal
