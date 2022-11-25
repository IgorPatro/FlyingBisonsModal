import React from "react"
import useCollapse from "react-collapsed"
import * as S from "./ModalCollapse.styled"

interface Props {
  header: React.ReactNode
  children: React.ReactNode | React.ReactNode[]
}

const ModalCollapse = ({ header, children }: Props) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <S.ModalCollapseWrapper>
      <S.ModalCollapseHeader {...getToggleProps()} isExpanded={isExpanded}>
        {header}
      </S.ModalCollapseHeader>
      <S.ModalCollapseBody {...getCollapseProps()}>
        {children}
      </S.ModalCollapseBody>
    </S.ModalCollapseWrapper>
  )
}

export default ModalCollapse
