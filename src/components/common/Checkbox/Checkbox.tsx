import React from "react"
import * as S from "./Checkbox.styled"

interface Props {
  label: string
  isChecked: boolean
  onChange: () => void
}

const Checkbox = ({ label, isChecked, onChange }: Props) => {
  return (
    <S.Label>
      <S.Input type="checkbox" checked={isChecked} onChange={onChange} />
      {label}
    </S.Label>
  )
}

export default Checkbox
