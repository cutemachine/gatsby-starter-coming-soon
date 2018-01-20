import styled from 'styled-components'
import { Box } from 'grid-styled'
import {
  space,
  width,
  fontSize,
  color
} from 'styled-system'

const P = styled(Box)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  line-height: 1.618em;
  font-family: 'Roboto',sans-serif;
  font-weight: 300;
`

export default P
