import { Clock, Coffee, ShoppingCart, Package } from '@phosphor-icons/react'
import {
  CoffeesContainer,
  HeroContainer,
  HeroContent,
  HomeContainer,
} from './styles'
import HeroImg from '../../assets/Imagem.svg'
import { Card } from '../../components/Card'
import { coffesList } from '../../utils/CoffeesDummyData'
export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroContent>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
            <ul>
              <li>
                <div>
                  <ShoppingCart />
                </div>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <div>
                  <Package />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <div>
                  <Clock />
                </div>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <div>
                  <Coffee />
                </div>
                <span>O café chega fresquinho até você</span>
              </li>
            </ul>
          </div>
          <div>
            <img src={HeroImg} alt="" />
          </div>
        </HeroContent>
      </HeroContainer>
      <CoffeesContainer>
        <h1>Nossos cafés</h1>
        <div>
          {coffesList.map((coffeeItem) => {
            return <Card key={coffeeItem.id} data={coffeeItem} />
          })}
        </div>
      </CoffeesContainer>
    </HomeContainer>
  )
}
