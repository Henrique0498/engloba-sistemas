import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  border-left: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-right: 1px solid ${({ theme }) => theme.colors.gray[200]};
`

export const Menu = styled.div`
  display: grid;
  position: relative;

  .button {
    height: 60px;
    display: flex;
    align-items: center;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 40px;
      cursor: pointer;
      border: none;
      background-color: transparent;
    }
  }

  .iconMenu {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.gray[500]};
    position: relative;
  }

  .iconMenu::before,
  .iconMenu span,
  .iconMenu::after {
    content: '';
    width: 28px;
    height: 4px;
    position: absolute;
    background-color: currentColor;
    opacity: 0.8;
    border-radius: 2px;
    transition: all ease-in-out
      ${({ theme }) => theme.animation.duration.medium};
  }

  .iconMenu::before {
    top: 9px;
  }

  .iconMenu::after {
    bottom: 9px;
  }

  .iconMenu.active::before,
  .iconMenu.active::after {
    top: auto;
    bottom: auto;
  }

  .iconMenu.active::before {
    transform: rotate(45deg);
  }

  .iconMenu.active span {
    transform: rotate(135deg);
    opacity: 0;
  }

  .iconMenu.active::after {
    transform: rotate(-45deg);
  }
`
