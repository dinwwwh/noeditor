export function addMissingCssUnit(value: string | number): string {
  if (typeof value === 'number' || !Number.isNaN(Number.parseInt(value[value.length - 1]))) {
    return `${value}px`
  }

  return value
}
