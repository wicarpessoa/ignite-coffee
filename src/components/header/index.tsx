import Logo from '../../assets/Logo.svg'
import { MapPin } from '@phosphor-icons/react'
import { HeaderContainer } from './styles'
import { useNavigate } from 'react-router-dom'
import ButtonToCart from './components/ButtonToCart'

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
        <ButtonToCart />
      </div>
    </HeaderContainer>
  )
}
