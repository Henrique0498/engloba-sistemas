import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: start;
  background: ${({ theme }) => theme.colors.gray[50]};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  height: 40px;
  border-radius: 0 4px 4px 0;

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.emerald[300]};
  }
`

export const Label = styled.label`
  width: 100%;
  top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;

  input {
    min-width: 80px;
    height: 100%;
    flex-grow: 1;
    background-color: transparent;
    border-radius: 4px;
    padding: 0px 8px;
    border: none;
    display: flex;
    align-items: center;
    font-size: 14px;

    :focus {
      box-shadow: 0 0 0 0;
      outline: 0;
    }

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button,
    ::-webkit-search-results-button,
    ::-webkit-search-results-decoration {
      -webkit-appearance: none;
    }
  }

  button {
    width: 40px;
    height: 40px;
    background: transparent;
    border: none;
    cursor: pointer;

    svg {
      width: 16px;
      height: 16px;
      color: ${({ theme }) => theme.colors.gray[400]};
    }

    :hover {
      background: rgb(0, 0, 0, 0.05);
      transition: all ${({ theme }) => theme.animation.duration.xxFast};
    }
  }
`

export const Error = styled.div``
