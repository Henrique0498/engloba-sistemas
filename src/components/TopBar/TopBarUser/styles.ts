import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;

  &.mobile {
    justify-content: flex-end;
  }
`

export const Nav = styled.ul`
  list-style: none;
  display: flex;

  li {
    position: relative;
    margin: 0 6px;

    .notification {
      width: 14px;
      height: 14px;
      position: absolute;
      top: 0px;
      right: 0px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.red[500]};
      border: 2px solid white;
    }

    svg {
      width: 30px;
      height: 30px;
      color: ${({ theme }) => theme.colors.yellow[300]};
    }
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  height: 50px;

  .photo {
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray[200]};
    border-radius: 8px;
    overflow: hidden;
    margin-left: 4px;

    & > div {
      width: 40px;
      height: 40px;
    }
  }

  .button {
    width: 20px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.gray[500]};
  }
`
