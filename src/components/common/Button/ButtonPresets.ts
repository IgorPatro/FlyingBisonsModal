import styled from "styled-components"

export const primary = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.blue};
  border-radius: 0.4rem;
  padding: 1.2rem 2.4rem;
  font-size: 1.6rem;
  border: none;
  font-weight: ${({ theme }) => theme.weights.medium};
  transition: background 0.2s ease-in-out;

  &:hover {
    /* TODO: Added quick hover effect */
    background-color: ${({ theme }) => theme.colors.green};
  }
`
