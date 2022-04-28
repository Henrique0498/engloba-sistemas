import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px;

  &.desktop {
    display: grid;
    grid-template-columns: 40% calc(60% - 30px);
    gap: 30px;
  }

  & > .graph {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    box-shadow: ${({ theme }) => theme.shadow.xxSmall};
    padding: 8px;
  }

  .graphSideBar {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
  }
`
