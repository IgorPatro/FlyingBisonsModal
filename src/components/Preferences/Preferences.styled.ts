import styled from "styled-components"

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const RingIcon = styled.span`
  display: inline-block;
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100%;
  border: ${({ theme }) => `3px solid ${theme.colors.green}`};
`

export const CompanyName = styled.span`
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.weights.bold};
`
