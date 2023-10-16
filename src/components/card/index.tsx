import { CardContainer, ControllerContainer, CounterContainer, ImgContainer, TagsContainer } from "./styles"
import Coffe1 from '../../assets/Image-1.png'
import { Tag } from "../tag"
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react"
export  function Card() {
  return (
    <CardContainer>
      <ImgContainer>
        <img src={Coffe1} alt="" />
      </ImgContainer>
      <TagsContainer>
        <Tag/>
      </TagsContainer>
      <span>Expresso Tradicional</span>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <ControllerContainer>
        <span>R$ 9,90</span>
        <div>
        <CounterContainer>
          <button><Minus size={12}/> </button>
          <span>1</span>
          <button> <Plus size={12}/> </button>
        </CounterContainer>
        <button><ShoppingCartSimple size={20}/></button>
        </div>
      </ControllerContainer>
    </CardContainer>
  )
}
