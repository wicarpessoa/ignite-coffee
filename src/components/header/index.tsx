import { MapPin } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Logo.svg'
import ButtonToCart from './components/ButtonToCart'
import { HeaderContainer } from './styles'

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
