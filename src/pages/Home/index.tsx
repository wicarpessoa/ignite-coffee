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
      id: 'ce476bee-de9e-454c-9601-fa046fbdea3e',
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: 'test',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '126f8b79-9be0-4d87-8866-f21295d35a3b',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      imgUrl: 'test',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '4b424368-9ee9-4a6a-bc14-ea2648b6351e',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      imgUrl: 'test',

      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: 'e9851195-2520-4077-8025-81303d2beca9',
      title: 'Expresso Gelado',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional', 'Gelado'],
      price: 9.9,
    },
    {
      id: '"6c217ffe-a247-4b0c-ac61-f33fdb5ab9e4"',
      title: 'Café com Leite',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '377126e4-92ae-484f-a1c5-3fc4a9ad2677',
      title: 'Latte',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '9e4643f9-efde-4aa1-bdf5-9255f1a0cb5f',

      title: 'Capuccino',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: 'c066868c-8510-4bb5-8b3c-028a287b2179',

      title: 'Macchiato',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '3ebe8c5e-50a7-4540-9e2e-a35ca1392126',

      title: 'Mocaccino',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '84c44484-96e3-480a-a6df-902ea8d42280',

      title: 'Chocolate Quente',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: 'b1344bef-d7b1-4bd2-9313-bf120ee351e3',

      title: 'Cubano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '2c3798e0-7271-42be-aef5-efc09b41d4fe',

      title: 'Havaiano',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '0a66c86e-f794-4c00-aab0-96163c3ca8cc',

      title: 'Árabe',
      description: 'O tradicional café feito com água quente e grãos moídos',
      imgUrl: '',
      type: ['Tradicional'],
      price: 9.9,
    },
    {
      id: '8f202f8a-ff11-4a49-ba42-9189862f824d',

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
