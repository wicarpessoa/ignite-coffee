import { useFormContext } from 'react-hook-form'
import { FormContainer } from './styles'
import { ErrorMessage } from '../../../../components/errorMessage'

export function AdressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  console.log(errors)
  return (
    <FormContainer>
      <label htmlFor="cep">
        <input type="text" id="cep" placeholder="CEP" {...register('cep')} />
        {errors.cep && <ErrorMessage message={String(errors.cep?.message)} />}
      </label>
      <label htmlFor="street">
        <input
          id="street"
          type="text"
          placeholder="Rua"
          {...register('street')}
        />
        {errors.street && (
          <ErrorMessage message={String(errors.street?.message)} />
        )}
      </label>
      <div>
        <label htmlFor="number">
          <input
            type="text"
            id="number"
            placeholder="Número"
            {...register('number')}
          />
          {errors.number && (
            <ErrorMessage message={String(errors.number?.message)} />
          )}
        </label>
        <label htmlFor="complement">
          <input
            id="complement"
            type="text"
            placeholder="Complemento"
            {...register('complement')}
          />
          {errors.complement && (
            <ErrorMessage message={String(errors.complement?.message)} />
          )}
        </label>
      </div>
      <div>
        <label htmlFor="neighborhood">
          <input
            id="neighborhood"
            type="text"
            placeholder="Bairro"
            {...register('neighborhood')}
          />
          {errors.neighborhood && (
            <ErrorMessage message={String(errors.neighborhood?.message)} />
          )}
        </label>
        <label htmlFor="city">
          <input
            id="city"
            type="text"
            placeholder="Cidade"
            {...register('city')}
          />
          {errors.city && (
            <ErrorMessage message={String(errors.city?.message)} />
          )}
        </label>
        <label htmlFor="uf">
          <input id="uf" type="text" placeholder="UF" {...register('uf')} />
          {errors.uf && <ErrorMessage message={String(errors.uf?.message)} />}
        </label>
      </div>
    </FormContainer>
  )
}
