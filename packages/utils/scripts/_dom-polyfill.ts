import { JSDOM } from 'jsdom'

const { window } = new JSDOM()

globalThis.document = window.document
globalThis.Node = window.Node
globalThis.Element = window.Element
