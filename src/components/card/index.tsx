import {
  CardContainer,
  ControllerContainer,
  ImgContainer,
  TagsContainer,
  TextCardContainer,
} from './styles'
import Coffe1 from '../../assets/Image-1.png'
import { Tag } from '../tag'
import { ShoppingCartSimple } from '@phosphor-icons/react'
import { Counter } from '../Counter'
export function Card() {
  return (
    <CardContainer>
      <TextCardContainer>
        <ImgContainer>
          <img src={Coffe1} alt="" />
        </ImgContainer>
        <TagsContainer>
          <Tag />
        </TagsContainer>
        <span>Expresso Tradicional</span>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </TextCardContainer>
      <ControllerContainer>
        <span>9,90</span>
        <div>
          <Counter />
          <button>
            <ShoppingCartSimple size={20} />
          </button>
        </div>
      </ControllerContainer>
    </CardContainer>
  )
}
