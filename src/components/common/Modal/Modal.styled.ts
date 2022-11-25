import styled from "styled-components"

export const ModalWrapper = styled.div`
  width: 75rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
