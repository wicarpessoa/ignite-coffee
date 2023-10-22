export function numberToCurrency(value: number): string {
  return `R$ ${value.toFixed(2).replace('.', ',')}`
}

export function numberWithTwoDecimals(number: number): string {
  // Round the number to two decimal places and convert it to a string
  const formattedNumber = number.toFixed(2)

  // Replace the decimal point with a comma
  const formattedString = formattedNumber.replace('.', ',')

  return formattedString
}
