import { Minus, Plus } from '@phosphor-icons/react'
import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Minus size={12} weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Plus size={12} weight="bold" />
      </button>
    </CounterContainer>
  )
}
