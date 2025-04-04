export function toReadableNumber(num: number): string {
  const formatter = new Intl.NumberFormat('ru-RU')
  return formatter.format(num)
}
