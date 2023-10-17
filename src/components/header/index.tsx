import { HeaderContainer } from './styles'
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <div>
        <div>
          <MapPin />
          <span>Porto Alegre, RS</span>
        </div>
        <button>
          <ShoppingCart size={20} />
        </button>
      </div>
    </HeaderContainer>
  )
}
