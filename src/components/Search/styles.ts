import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 500px;
  height: 64px;
  align-items: center;
  padding: 0 10px;
`

export const Search = styled.form`
  width: 100%;
  height: 40px;
  display: flex;
  max-width: 100%;
`

export const Select = styled.div`
  min-width: 90px;
  display: flex;
  height: 40px;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  border-right: 0px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray[500]};
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  border-radius: 4px 0 0 4px;

  .icon {
    width: 14px;
    height: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .list {
    width: 100%;
  }
`
