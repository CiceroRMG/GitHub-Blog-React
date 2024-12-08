import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LayoutContainer, MainContent } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  )
}
