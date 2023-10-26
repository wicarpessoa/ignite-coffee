import { Tag } from '../tag'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Counter } from '../Counter'
import {
  CardContainer,
  CardContentContainer,
  ImgContainer,
  TagsContainer,
  ControllerContainer,
  CardTextContainer,
} from './styles'
import { ComponentProps, useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { numberWithTwoDecimals } from '../../utils/numberToCurrency'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface CoffeeProps {
  id: string
  priceId: string
  imgUrl: string
  title: string
  description: string
  type: string[]
  price: number
}

interface cardComponentProps extends ComponentProps<'div'> {
  data: CoffeeProps
}
export function Card({ data }: cardComponentProps) {
  const { addNewCartItem } = useContext(CartContext)
  const [count, setCount] = useState(1)
  function onHandleAddCounter() {
    setCount((prevState) => prevState + 1)
  }
  function onHandleSubCounter() {
    setCount((prevState) => prevState - 1)
  }
  const formattedPrice = numberWithTwoDecimals(data.price)

  return (
    <CardContainer>
      <CardContentContainer>
        <ImgContainer>
          <img src={data.imgUrl} alt="" />
        </ImgContainer>
        <CardTextContainer>
          <TagsContainer>
            <Tag />
          </TagsContainer>
          <span>{data.title}</span>
          <p>{data.description}</p>
        </CardTextContainer>
      </CardContentContainer>
      <ControllerContainer>
        <span>{formattedPrice}</span>
        <div>
          <Counter
            onHandleAddCounter={onHandleAddCounter}
            onHandleSubCounter={onHandleSubCounter}
            count={count}
          />
          <button
            onClick={() => {
              addNewCartItem({
                id: data.id,
                priceId: data.priceId,
                title: data.title,
                description: data.description,
                price: data.price,
                imgUrl: data.imgUrl,
                type: data.type,
                quantity: count,
              })
              toast.success(`Item ${data.title} adicionado com sucesso!`, {
                toastId: data.id,
                autoClose: 2500,
              })
              setCount(1)
            }}
          >
            <ShoppingCartSimple size={20} />
          </button>
        </div>
      </ControllerContainer>
    </CardContainer>
  )
}
