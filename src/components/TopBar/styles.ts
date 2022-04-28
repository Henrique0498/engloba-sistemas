import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  height: 64px;
  position: fixed;
  top: -64px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow.xSmall};
  transition: all ${({ theme }) => theme.animation.duration.xFast};

  &.desktop {
    grid-template-columns: auto minmax(40px, 120px) 1fr auto;
  }

  &.active {
    top: 0px;
  }
`
