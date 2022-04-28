import styled from 'styled-components'

export const Container = styled.div`
  a {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    height: 140px;
    border-radius: 8px;
    box-shadow: ${({ theme }) => theme.shadow.xSmall};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
    color: currentColor;

    :hover {
      background-color: ${({ theme }) => theme.colors.white};
      transform: scale(1.05);
    }
  }

  .icon {
    svg {
      width: 60px;
      height: 60px;
    }
  }
`
