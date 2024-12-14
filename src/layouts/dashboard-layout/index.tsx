import { NavLink, Outlet } from 'react-router-dom'
import * as S from './styles'
import sidebarLinks from '../../data/sidebar-links'
import AppHeader from '../../components/app-header'
import AppPageWrapper from '../../components/app-page-wrapper'

const DashboardLayout: React.FC = () => {
  return (
    <S.DashboardLayout>
      <S.Sidebar>
        <S.SidebarLinks>
          {sidebarLinks.map((link) => (
            <S.LinkItem key={link.key}>
              <NavLink to={link.href} className={({ isActive }) => (isActive ? 'active' : '')}>
                {link.icon}
                <span>{link.label}</span>
              </NavLink>
            </S.LinkItem>
          ))}
        </S.SidebarLinks>
      </S.Sidebar>
      <S.MainView>
        <AppHeader />
        <AppPageWrapper>
          <Outlet />
        </AppPageWrapper>
      </S.MainView>
    </S.DashboardLayout>
  )
}

export default DashboardLayout
