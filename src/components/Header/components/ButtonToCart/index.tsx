import { ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../../context/CartContext'
import { ButtonToCartContainer } from './styles'

export default function ButtonToCart() {
  const navigate = useNavigate()
  const { cart } = useContext(CartContext)
  const cartLength = cart.length
  return (
    <ButtonToCartContainer
      $cartLength={cartLength}
      onClick={() => navigate('/checkout')}
    >
      <ShoppingCart size={20} />
    </ButtonToCartContainer>
  )
}
