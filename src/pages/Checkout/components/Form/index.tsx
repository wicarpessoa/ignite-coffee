import { useFormContext } from 'react-hook-form'
import { FormContainer, Input } from './styles'
import { FormErrorDescription } from '../../../../components/FormErrorDescription'

export function AdressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="cep">
        <Input
          type="text"
          id="cep"
          placeholder="CEP"
          $error={!!errors.cep}
          {...register('cep')}
        />
        {errors.cep && (
          <FormErrorDescription message={String(errors.cep?.message)} />
        )}
      </label>
      <label htmlFor="street">
        <Input
          id="street"
          type="text"
          placeholder="Rua"
          $error={!!errors.street}
          {...register('street')}
        />
        {errors.street && (
          <FormErrorDescription message={String(errors.street?.message)} />
        )}
      </label>
      <div>
        <label htmlFor="number">
          <Input
            type="text"
            id="streetNumber"
            placeholder="Número"
            $error={!!errors.streetNumber}
            {...register('streetNumber')}
          />
          {errors.streetNumber && (
            <FormErrorDescription
              message={String(errors.streetNumber?.message)}
            />
          )}
        </label>
        <label htmlFor="complement">
          <Input
            id="complement"
            type="text"
            placeholder="Complemento"
            $error={!!errors.complement}
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
          <Input
            id="neighborhood"
            type="text"
            placeholder="Bairro"
            $error={!!errors.neighborhood}
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
            <Input
              id="city"
              type="text"
              placeholder="Cidade"
              $error={!!errors.city}
              {...register('city')}
            />
            {errors.city && (
              <FormErrorDescription message={String(errors.city?.message)} />
            )}
          </label>
          <label htmlFor="uf">
            <Input
              id="uf"
              type="text"
              placeholder="UF"
              $error={!!errors.state}
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
