import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[700]};
    text-transform: capitalize;
  }

  &.notFound {
    height: 100%;
    font-size: 24px;
  }
`
