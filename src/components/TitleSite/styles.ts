import styled from 'styled-components'

export const Container = styled.h2`
  padding: 0 16px;
  height: 64px;
  display: flex;
  align-items: center;

  .title {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: ${({ theme }) => theme.colors.blue[400]};

    div {
      display: flex;
      flex-direction: column;
      letter-spacing: -1px;
    }

    span {
      font-size: 10px;
      letter-spacing: 3.5px;
      font-weight: 500;
    }

    svg {
      grid-area: 1;
      width: 40px;
      height: 40px;
    }
  }
`
