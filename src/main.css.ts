import { vars } from '@fizzui/styles'
import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body', {
  fontFamily: `'Inter Variable', 'Inter', sans-serif`,
  fontFeatureSettings: `'rlig' 1, 'calt' 1`,
  backgroundColor: vars.bg.base[0],
})

globalStyle('code, kbd, samp, pre', {
  fontFamily: `'JetBrains Mono Variable', monospace`,
})
