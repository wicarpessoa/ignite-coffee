import Coffe1 from '../../assets/Image-1.png'
import { Tag } from '../tag'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Counter } from '../Counter'
import {
  CardContainer,
  TextCardContainer,
  ImgContainer,
  TagsContainer,
  ControllerContainer,
} from './styles'
import { ComponentProps, useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'

interface CoffeeProps {
  title: string
  description: string
  imgUrl: string
  type: string[]
  price: number
}

interface cardComponentProps extends ComponentProps<'div'> {
  data: CoffeeProps
}
export function Card({ data }: cardComponentProps) {
  const { addNewCartItem, cart } = useContext(CartContext)
  console.log(cart)
  const [count, setCount] = useState(1)
  function onHandleAddCounter() {
    setCount((prevState) => prevState + 1)
  }
  function onHandleSubCounter() {
    setCount((prevState) => prevState - 1)
  }
  return (
    <CardContainer>
      <TextCardContainer>
        <ImgContainer>
          <img src={Coffe1} alt="" />
        </ImgContainer>
        <TagsContainer>
          <Tag />
        </TagsContainer>
        <span>{data.title}</span>
        <p>{data.description}</p>
      </TextCardContainer>
      <ControllerContainer>
        <span>{data.price}</span>
        <div>
          <Counter
            onHandleAddCounter={onHandleAddCounter}
            onHandleSubCounter={onHandleSubCounter}
            count={count}
          />
          <button
            onClick={() => {
              addNewCartItem({
                title: data.title,
                description: data.description,
                imgUrl: data.imgUrl,
                type: data.type,
                quantity: count,
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
