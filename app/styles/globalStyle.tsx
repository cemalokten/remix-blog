import { createGlobalStyle } from 'styled-components'
import { Paragraph } from './index'
import * as CONST from '../constants'

const GlobalStyle = createGlobalStyle`
  p {
${Paragraph}
  }
`

export default GlobalStyle
