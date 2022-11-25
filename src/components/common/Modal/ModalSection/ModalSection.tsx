import React from "react"
import * as S from "./ModalSection.styled"

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const ModalSection = ({ children }: Props) => {
  return <S.ModalSection>{children}</S.ModalSection>
}

export default ModalSection
