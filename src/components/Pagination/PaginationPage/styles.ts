import styled from 'styled-components'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-left: none;
  padding: 4px 8px;
  cursor: pointer;

  &.active {
    background-color: ${({ theme }) => theme.colors.blue[400]};
    color: ${({ theme }) => theme.colors.white};
  }
`
