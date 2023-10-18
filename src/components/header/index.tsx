import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer } from './styles'
import { useNavigate } from 'react-router-dom'

export function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <button onClick={() => navigate('/')}>
        <img src={Logo} alt="" />
      </button>
      <div>
        <button>
          <MapPin />
          <span>Porto Alegre, RS</span>
        </button>
        <button onClick={() => navigate('/checkout')}>
          <ShoppingCart size={20} />
        </button>
      </div>
    </HeaderContainer>
  )
}
