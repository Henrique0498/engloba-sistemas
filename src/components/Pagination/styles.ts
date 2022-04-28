import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  text-transform: capitalize;

  .title {
    margin-right: 10px;
  }

  .page {
    display: flex;

    div:first-child {
      border-left: 1px solid ${({ theme }) => theme.colors.gray[300]};
      border-radius: 4px 0 0 4px;
    }

    div:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
`
