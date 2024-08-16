export function addMissingCssUnit(value: string | number): string {
  if (typeof value === 'number' || !hasUnit(value)) {
    return `${value}px`
  }

  return value
}

export function isCssUnit(value: string): boolean {
  return /^[0-9.]+[a-z]{0,9}$/i.test(value)
}

export function hasUnit(value: string): boolean {
  return /[a-z]{1,9}$/i.test(value)
}
