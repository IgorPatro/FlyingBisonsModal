import React from "react"
import * as ButtonsBasicPresets from "./ButtonPresets"

interface ButtonProps {
  preset: keyof typeof ButtonsBasicPresets
  children?: React.ReactNode | string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const Item = ButtonsBasicPresets[props.preset]

  return (
    // TODO: We spread the props here to pass custom styles
    <Item onClick={props.onClick} {...props}>
      {props.children}
    </Item>
  )
}

export default Button
