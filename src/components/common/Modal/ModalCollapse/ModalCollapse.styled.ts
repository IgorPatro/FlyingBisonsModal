import styled from "styled-components"
import arrow from "../../../../assets/icons/arrow.svg"

export const ModalCollapseWrapper = styled.div`
  width: 100%;

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.colors.gray};
    margin-top: 1.4rem;
  }
`

interface ModalCollapseHeaderProps {
  isExpanded: boolean
}

export const ModalCollapseHeader = styled.div<ModalCollapseHeaderProps>`
  display: flex;
  position: relative;
  width: 100%;

  &::after {
    content: "";
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 2rem;
    height: 2rem;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%)
      rotate(${({ isExpanded }) => (isExpanded ? "180deg" : "0")});
    transition: transform 0.2s ease-in-out;
  }
`

export const ModalCollapseBody = styled.div`
  width: 100%;
  margin: 1.8rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
`
