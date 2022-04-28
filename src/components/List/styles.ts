import styled, { css } from 'styled-components'

interface ListStyleProps {
  height?: number
  left?: number
  right?: number
}

export const Container = styled.div<ListStyleProps>`
  ${({ height = 50, left = 0, right }) => css`
    z-index: 101;
    min-width: 60px;
    background: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: ${height}px;
    ${right != undefined ? `right: ${right}px` : `left: ${left}px`};
    box-shadow: ${({ theme }) => theme.shadow.xxSmall};
    border-radius: 4px;
    overflow: hidden;

    ul {
      list-style: none;

      li {
        padding: 4px 8px;
      }

      li,
      a {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
        height: 40px;
        cursor: pointer;
        white-space: nowrap;
        text-decoration: none;
        color: currentColor;

        .icon {
          width: 30px;

          svg {
            width: 20px;
            height: 20px;
          }
        }

        &:hover {
          background: ${({ theme }) => theme.colors.gray[100]};
        }
      }

      li:last-child,
      a:last-child {
        border: none;
      }
    }
  `}
`
