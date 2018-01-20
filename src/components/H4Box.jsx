import styled from 'styled-components'
import { Box } from 'grid-styled'
import {
  space,
  width,
  fontSize,
  color
} from 'styled-system'

const H4Box = styled(Box)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  font-family: 'Raleway',sans-serif;
  font-weight: 200;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.1;
  text-align: ${props => props.center ? 'center' : 'inherit'};
`

export default H4Box

