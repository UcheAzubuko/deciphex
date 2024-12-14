import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { pxToRem } from '../../utils/px-to-rem'

export const DashboardLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  overflow: hidden;

  @media (min-width: ${theme.breakpoints.desktop}) {
    grid-template-columns: ${pxToRem(216)} 1fr;
  }
`

export const Sidebar = styled.nav`
  padding-top: ${pxToRem(94)};
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding-right: ${pxToRem(16)};
  background-color: ${theme.colors.lightMist};
  border-right: ${pxToRem(1)} solid #00000026;
  box-shadow: 0px 1px 3px 0px #00000026;
`

export const SidebarLinks = styled.ul`
  display: flex;
  flex-direction: column;
`

export const LinkItem = styled.li`
  height: ${pxToRem(56)};
  width: 100%;
  cursor: pointer;

  a {
    display: flex;
    align-items: center;
    column-gap: ${pxToRem(14)};
    width: 100%;
    height: 100%;
    padding: ${pxToRem(18)} ${pxToRem(9)};
    border-radius: 0 ${pxToRem(7)} ${pxToRem(7)} 0;

    span {
      display: none;
      font-size: ${theme.fontSizes.base};
      font-weight: ${theme.fontWeights.medium};
      line-height: 16.94px;
      color: ${theme.textColors.default};
    }

    &:hover {
      background-color: #dae1ec;
    }

    &.active {
      background-color: ${theme.colors.primary};

      svg path {
        fill: ${theme.colors.white};
      }

      span {
        color: ${theme.colors.white};
      }
    }

    @media (min-width: ${theme.breakpoints.desktop}) {
      padding: ${pxToRem(18)};

      span {
        display: inline-block;
      }
    }
  }
`

export const MainView = styled.main`
  flex: 1;
  overflow-y: auto;
  background-color: ${theme.colors.white};
`
