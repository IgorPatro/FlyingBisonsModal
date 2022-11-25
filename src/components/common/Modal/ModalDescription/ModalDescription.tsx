import React from "react"
import * as S from "./ModalDescription.styled"

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const ModalDescription = ({ children }: Props) => {
  return <S.ModalDescription>{children}</S.ModalDescription>
}

export default ModalDescription
