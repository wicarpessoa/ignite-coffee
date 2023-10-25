import {
  Arabian,
  Capuccino,
  HotChocolatte,
  CoffeeWithMilk,
  Cuban,
  Espresso,
  AmericanEspresso,
  CreamyEspresso,
  IcedCoffee,
  Hawaiian,
  Ireland,
  Latte,
  Macchiato,
  Mochaccino,
} from '../pages/Home/assets/CoffeeImagesIndex'

export const coffesList = [
  {
    id: 'ce476bee-de9e-454c-9601-fa046fbdea3e',
    imgUrl: Espresso,
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    type: ['Tradicional'],
    price: 9.9,
  },
  {
    id: '126f8b79-9be0-4d87-8866-f21295d35a3b',
    imgUrl: AmericanEspresso,
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    type: ['Tradicional'],
    price: 8.9,
  },
  {
    id: '4b424368-9ee9-4a6a-bc14-ea2648b6351e',
    imgUrl: CreamyEspresso,
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',

    type: ['Tradicional'],
    price: 10.9,
  },
  {
    id: 'e9851195-2520-4077-8025-81303d2beca9',
    imgUrl: IcedCoffee,
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    type: ['Tradicional', 'Gelado'],
    price: 11.2,
  },
  {
    id: '"6c217ffe-a247-4b0c-ac61-f33fdb5ab9e4"',
    imgUrl: CoffeeWithMilk,
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    type: ['Tradicional', 'com leite'],
    price: 8.2,
  },
  {
    id: '377126e4-92ae-484f-a1c5-3fc4a9ad2677',
    imgUrl: Latte,
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    type: ['Tradicional', 'com leite'],
    price: 9.3,
  },
  {
    id: '9e4643f9-efde-4aa1-bdf5-9255f1a0cb5f',
    imgUrl: Capuccino,

    title: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    type: ['Tradicional', 'com leite'],
    price: 7.4,
  },
  {
    id: 'c066868c-8510-4bb5-8b3c-028a287b2179',
    imgUrl: Macchiato,

    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    type: ['Tradicional', 'com leite'],
    price: 9.9,
  },
  {
    id: '3ebe8c5e-50a7-4540-9e2e-a35ca1392126',
    imgUrl: Mochaccino,

    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    type: ['Tradicional', 'com leite'],
    price: 9.2,
  },
  {
    id: '84c44484-96e3-480a-a6df-902ea8d42280',
    imgUrl: HotChocolatte,

    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    type: ['especial', 'com leite'],
    price: 7.9,
  },
  {
    id: 'b1344bef-d7b1-4bd2-9313-bf120ee351e3',
    imgUrl: Cuban,

    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    type: ['especial', 'alcoólico', 'gelado'],
    price: 10.9,
  },
  {
    id: '2c3798e0-7271-42be-aef5-efc09b41d4fe',
    imgUrl: Hawaiian,

    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    type: ['especial'],
    price: 10.3,
  },
  {
    id: '0a66c86e-f794-4c00-aab0-96163c3ca8cc',
    imgUrl: Arabian,

    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    type: ['especial'],
    price: 9.9,
  },
  {
    id: '8f202f8a-ff11-4a49-ba42-9189862f824d',
    imgUrl: Ireland,

    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    type: ['especial', 'alcoólico'],
    price: 9.9,
  },
]
