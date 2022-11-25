import React from "react"

interface Props {
  children: React.ReactNode | React.ReactNode[]
}

const ModalSection = ({ children }: Props) => {
  return <div>{children}</div>
}

export default ModalSection
