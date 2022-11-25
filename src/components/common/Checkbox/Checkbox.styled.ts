import styled from "styled-components"
import check from "../../../assets/icons/check.svg"

export const Label = styled.label`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
`

interface InputProps {
  checked?: boolean
}

export const Input = styled.input<InputProps>`
  -webkit-appearance: none;
  appearance: none;
  padding: 0;
  margin: 0;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.4rem;
  border: ${({ theme }) => `0.2rem solid ${theme.colors.darkBlue}`};
  outline: none;
  cursor: pointer;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.darkBlue : theme.colors.white};
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-image: url(${check});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
    width: 100%;
    height: 100%;
  }
`
