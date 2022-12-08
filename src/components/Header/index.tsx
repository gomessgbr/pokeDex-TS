import { HeaderContainer } from './styles'
import logoPokeApi from '../../assets/pokeapi-logo.png'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <img src={logoPokeApi} alt="" />
      </nav>
    </HeaderContainer>
  )
}
