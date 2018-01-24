import React, { Component } from 'react'
import styled from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { width, space, color } from 'styled-system'

import {
  H2Box,
  H4Box,
  P,
  PTiny
} from './'

const Section = styled.section`
  ${color}
  ${width}
  ${space}
`

const Email = styled(Box)`
  ${color}
  border: 1px solid #E35C36;
  width: 100%;
`

const Submit = styled(Box)`
  background: ${props => props.theme.colors.brand};
  color: white;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    background: red;
  }
`

class SignupForm extends Component {
  render() {
    const bg = this.props.bg || 'darkBlueBlack' 
    const color = this.props.color || 'white' 
    const placeholder = this.props.placeholder || 'Enter Your Email'
    const buttonTitle = this.props.buttonTitle || 'Join the newsletter'
    const name = this.props.name || 'Newsletter'
    const title = this.props.title || 'Enjoyed the article?'
    const description = this.props.description || 'My best content on design, marketing, and business. Delivered each week for free.'
    const formAction = this.props.action

    return (
      <Section color={color} bg={bg} py={6} px={[1, 6]}>
        <Flex wrap style={{maxWidth: '800', marginLeft: 'auto', marginRight: 'auto'}}>
          <H4Box w={1} py={1}>
            { name }
          </H4Box>
          <Box w={[1, 1, 3 / 5]} pr={1}>
            <H2Box py={1}>
              { title }
            </H2Box>
            <P py={1}>
              { description }
            </P>
          </Box>
          <Box w={[1, 1, 2 / 5]}>
            <Box py={1}>
              <div id='mc_embed_signup'>
                <form action={formAction} method='post' id='mc-embedded-subscribe-form' name='mc-embedded-subscribe-form' className='validate' target='_blank' noValidate>
                  <div id='mc_embed_signup_scroll'>
                    <div className='mc-field-group'>
                      <Email is='input' bg='white' p={0} mb={2} type='email' name='EMAIL' className='required email' id='mce-EMAIL' placeholder={placeholder} />
                    </div>
                    <div id='mce-responses' className='clear'>
                      <div className='response' id='mce-error-response' style={{display: 'none'}} />
                      <div className='response' id='mce-success-response' style={{display: 'none'}} />
                    </div>
                    <div style={{position: 'absolute', left: '-5000px'}} aria-hidden='true'>
                      <input type='text' name='b_21fb7ae093305702a7417e61f_bed7e05213' tabIndex='-1' value='' />
                    </div>
                    <Submit is='input' p={0} type='submit' value={buttonTitle} name='subscribe' id='mc-embedded-subscribe' />
                  </div>
                </form>
                <PTiny center>No spam, unsubscribe at any time.</PTiny>
              </div>
            </Box>
          </Box>
        </Flex>
      </Section>
    )
  }
}

export default SignupForm
