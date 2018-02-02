import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Box } from 'grid-styled'
import {
  space,
  width,
  fontSize,
  color
} from 'styled-system'

const Section = styled.section`
  ${color}
  ${width}
  ${space}
`

const Meter = styled.div`
  height: 50px;
	position: relative;
  background: ${props => props.backgroundColor};
`

const fillAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: ${props => props.percentage}%;
  }
`

const Fill = styled.div`
  display: flex;
  width: ${props => props.percentage}%;
  height: 50px;
  background-color: ${props => props.fillColor};
  align-items: center;
  justify-content: center;
  animation: ${fillAnimation} 2s ease-in-out 0s;
`

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
`

const Label = styled.span`
  opacity: 0;
  color: ${props => props.color};
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
  animation-duration: 2s;
  animation-timing-funtion: ease-in;
  animation-delay: 0.8s;
`

class Progress extends React.Component {
  render() {
    const { percentage, fillColor,labelColor, backgroundColor } = this.props

    return (
      <Section>
        <Meter backgroundColor={backgroundColor}>
          <Fill percentage={percentage} fillColor={fillColor}>
            <Label color={labelColor}>{this.props.label}</Label>
          </Fill>
        </Meter>
      </Section>
    )
  }
}

export default Progress
