import React from 'react'
import { ErrorMessageContainer } from './styles'

interface MessageErrorProps {
  message: string
}

export function ErrorMessage({ message }: MessageErrorProps) {
  return <ErrorMessageContainer>{message}</ErrorMessageContainer>
}
