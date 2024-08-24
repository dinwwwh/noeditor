export function classNameToSelectors(className: string): string {
  return className
    .split(/\s+/)
    .map(className => `.${className}`)
    .join('')
}
