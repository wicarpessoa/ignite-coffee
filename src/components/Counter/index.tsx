import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'
import { ComponentProps } from 'react'
interface CounterProps extends ComponentProps<'div'> {
  count: number
  onHandleAddCounter: () => void
  onHandleSubCounter: () => void
}

export function Counter({
  onHandleSubCounter,
  onHandleAddCounter,
  count,
}: CounterProps) {
  const buttonSubisDisabled = count <= 1
  return (
    <CounterContainer>
      <button
        type="button"
        onClick={onHandleSubCounter}
        disabled={buttonSubisDisabled}
      >
        <Minus size={12} weight="bold" />
      </button>
      <span>{count}</span>
      <button type="button" onClick={onHandleAddCounter}>
        <Plus size={12} weight="bold" />
      </button>
    </CounterContainer>
  )
}
