export const pxToRem = (px: number, base: number = 14): string => {
  return `${px / base}rem`
}
