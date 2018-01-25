import React from 'react'
import styled from 'styled-components'
import { Box } from 'grid-styled'
import { width, space, fontSize, color } from 'styled-system'
import {
  H2Box,
  H3Box,
  H4Box,
  P,
  SignupForm
} from '../components'
import config from '../../data/siteConfig'

const LandingPage = styled.div`
  border-top: 10px solid ${props => props.theme.colors.brand};
  border-bottom: 10px solid ${props => props.theme.colors.brand};
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
  }
  background-color: ${props => props.theme.colors.darkBlueBlack};
  background-repeat: repeat;
  background-image: url("/images/pattern.png");
`

const Hero = styled.section`
  ${space}
  ${color}
  ${fontSize}
  ${width}
`

// const Feature = styled.section`
//   background: ${props => props.theme.colors.superLightGray};
// `
const FeatureBox = styled(Box)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`

const FeatureList = styled.ul`
  ${space}
  ${color}
  ${fontSize}
  ${width}
  list-style-type: none;
  margin: 0;
`

const FeatureItem = styled.li`
  ${space}
  ${color}
  ${fontSize}
  ${width}
  text-align: center;
`

const ComingSoon = styled.section`
  ${space}
  ${color}
  ${fontSize}
  ${width}
`

export default () => (
  <LandingPage>
    <Hero color='white' bg='darkBlueBlack' px={[1, 6]}>
      <div style={{position: 'relative', maxWidth: '800', marginLeft: 'auto', marginRight: 'auto'}}>
        <Box py={6}>
          <H4Box is='h1' py={1}>{`${config.projectName}`}</H4Box>
          <H2Box is='h2' py={1}>{`${config.projectTitle}`}</H2Box>
          <P fontSize={[0]} py={1}>{`${config.projectSubtitle}`}</P>
        </Box>
      </div>
    </Hero>
    <ComingSoon py={6}>
      <H3Box is='h3' center px={1} py={6}>Coming very soon</H3Box>
      <FeatureBox color='white' bg='blueBlack' py={4} px={[0, 6]} mb={6}>
        <FeatureList p={1}>
          <FeatureItem>Works perfectly on any screen size</FeatureItem>
          <FeatureItem>Deploy your site with one command</FeatureItem>
          <FeatureItem>Use your own domain</FeatureItem>
          <FeatureItem>No recurring costs</FeatureItem>
          <FeatureItem>Free hosting on Netlify</FeatureItem>
          <FeatureItem>Free certificate from Let&#39;s Encrypt</FeatureItem>
        </FeatureList>
      </FeatureBox>
    </ComingSoon>
    <SignupForm
      name={`${config.signupFormNewsletterName}`}
      title={`${config.signupFormCallToAction}`}
      description={`${config.signupFormText}`}
      buttonTitle={`${config.signupFormButtonTitle}`}
      action={`${config.signupFormAction}`}
    />
  </LandingPage>
)
