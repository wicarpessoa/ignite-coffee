import { useFormContext } from 'react-hook-form'
import { FormContainer } from './styles'
import { FormErrorDescription } from '../../../../components/FormErrorDescription'

export function AdressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="cep">
        <input type="text" id="cep" placeholder="CEP" {...register('cep')} />
        {errors.cep && (
          <FormErrorDescription message={String(errors.cep?.message)} />
        )}
      </label>
      <label htmlFor="street">
        <input
          id="street"
          type="text"
          placeholder="Rua"
          {...register('street')}
        />
        {errors.street && (
          <FormErrorDescription message={String(errors.street?.message)} />
        )}
      </label>
      <div>
        <label htmlFor="number">
          <input
            type="text"
            id="number"
            placeholder="Número"
            {...register('streetNumber')}
          />
          {errors.streetNumber && (
            <FormErrorDescription
              message={String(errors.streetNumber?.message)}
            />
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
            <FormErrorDescription
              message={String(errors.complement?.message)}
            />
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
            <FormErrorDescription
              message={String(errors.neighborhood?.message)}
            />
          )}
        </label>
        <div>
          <label htmlFor="city">
            <input
              id="city"
              type="text"
              placeholder="Cidade"
              {...register('city')}
            />
            {errors.city && (
              <FormErrorDescription message={String(errors.city?.message)} />
            )}
          </label>
          <label htmlFor="uf">
            <input
              id="uf"
              type="text"
              placeholder="UF"
              {...register('state')}
            />
            {errors.state && (
              <FormErrorDescription message={String(errors.state?.message)} />
            )}
          </label>
        </div>
      </div>
    </FormContainer>
  )
}
