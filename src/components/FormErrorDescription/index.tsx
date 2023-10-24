import { FormErrorDescriptionContainer } from './styles'

interface MessageErrorProps {
  message: string
}

export function FormErrorDescription({ message }: MessageErrorProps) {
  return (
    <FormErrorDescriptionContainer>{message}</FormErrorDescriptionContainer>
  )
}
