import { Clock, Coffee, ShoppingCart, Package } from '@phosphor-icons/react'
import {
  CoffeesContainer,
  HeroContainer,
  HeroContent,
  HomeContainer,
} from './styles'
import HeroImg from '../../assets/Imagem.svg'
import { Card } from '../../components/Card'

export function Home() {
  const coffesList = [
    {
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: 'test',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      imgUrl: 'test',

      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      imgUrl: 'test',

      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Expresso Gelado',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional', 'Gelado'],
      price: 9.9,
    },
    {
      title: 'Café com Leite',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Latte',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Capuccino',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Macchiato',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Mocaccino',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Chocolate Quente',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Cubano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Havaiano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Árabe',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      title: 'Irlandês',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
  ]

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
            return <Card key={coffeeItem.title} data={coffeeItem} />
          })}
        </div>
      </CoffeesContainer>
    </HomeContainer>
  )
}
