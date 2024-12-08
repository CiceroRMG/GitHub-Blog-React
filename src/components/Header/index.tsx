import { HeaderContainer } from './styles'
import terminalIcon from '../../assets/terminal.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={terminalIcon} alt="" />
        <h3>GITHUB BLOG</h3>
      </div>
    </HeaderContainer>
  )
}
