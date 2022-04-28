import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  .title {
    margin-right: 10px;
    text-transform: capitalize;
  }

  .select {
    position: relative;
    height: 30px;
    min-width: 150px;
    display: flex;
    border-radius: 4px;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray[50]};
    padding: 4px 8px;
    border: 1px solid ${({ theme }) => theme.colors.gray[300]};
    color: ${({ theme }) => theme.colors.gray[700]};
    text-transform: capitalize;

    svg {
      margin-left: 10px;
    }

    & > .list {
      width: 100%;
    }
  }
`
