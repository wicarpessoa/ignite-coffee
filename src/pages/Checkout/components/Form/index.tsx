import { FormContainer } from './styles'

export default function AdressForm() {
  return (
    <FormContainer action="">
      <label htmlFor="">
        <input type="text" name="" id="" placeholder="CEP" />
      </label>
      <label htmlFor="">
        <input type="text" placeholder="Rua" />
      </label>
      <div>
        <label htmlFor="">
          <input type="text" name="" id="" placeholder="Número" />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="Complemento" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input type="text" placeholder="Bairro" />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="Cidade" />
        </label>
        <label htmlFor="">
          <input type="text" placeholder="UF" />
        </label>
      </div>
    </FormContainer>
  )
}
