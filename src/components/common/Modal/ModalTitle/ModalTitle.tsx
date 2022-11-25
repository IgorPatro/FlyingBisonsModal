import React from "react"
import * as S from "./ModalTitle.styled"

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const ModalTitle = ({ children }: Props) => {
  return <S.ModalTitle>{children}</S.ModalTitle>
}

export default ModalTitle
