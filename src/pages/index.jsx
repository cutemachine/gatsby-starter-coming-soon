import React from 'react'
import Link from 'gatsby-link'
import styled, { withTheme } from 'styled-components'
import { Box } from 'grid-styled'
import { width, space, fontSize, color } from 'styled-system'
import {
  Muffin,
  H2Box,
  H3Box,
  H4Box,
  P,
  SignupForm,
  Progress
} from '../components'
import config from '../../data/siteConfig'

const Page = styled.div`
  border-top: 10px solid ${props => props.theme.colors.brand};
  border-bottom: 10px solid ${props => props.theme.colors.brand};
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0;
  }
  background-color: ${props => props.theme.colors.darkBlueBlack};
  background-repeat: repeat;
  background-image: url("/images/pattern.png");
`

const LogoStyled = styled(Muffin)`
  vertical-align: middle;
  position: absolute;
  top: 0px;
  right: 0px;
  background: ${props => props.theme.colors.brand};
  padding: ${props => props.theme.space[0]};
`

const Hero = styled.section`
  ${space}
  ${color}
  ${fontSize}
  ${width}
`

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

class LandingPage extends React.Component {
  render () {
    const { theme } = this.props

    return (
      <Page>
        <Hero color='white' bg='darkBlueBlack' px={[1, 6]}>
          <div style={{position: 'relative', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
            <Link to='/'>
              <LogoStyled fill={theme.colors.brandLogo} width='2em' height='2em' alt='Brand Logo' />
            </Link>
            <Box py={6}>
              <H4Box is='h1' py={1}>{`${config.projectName}`}</H4Box>
              <H2Box is='h2' py={1}>{`${config.projectTitle}`}</H2Box>
              <P fontSize={[0]} py={1}>{`${config.projectSubtitle}`}</P>
            </Box>
          </div>
        </Hero>
        <Progress
          percentage={config.progressPercentage}
          label={config.progressLabel}
          fillColor={config.progressFillColor}
          labelColor={config.progressLabelColor}
          backgroundColor={config.progressBackgroundColor}
        />
        <ComingSoon py={6}>
          <H3Box is='h3' center px={1} py={6}>Coming very soon</H3Box>
          <FeatureBox color='white' bg='blueBlack' py={4} px={[0, 6]} mb={6}>
            <FeatureList p={1}>
              <FeatureItem>Secret pop-up bakery</FeatureItem>
              <FeatureItem>Bio-bio wheat</FeatureItem>
              <FeatureItem>Always fresh</FeatureItem>
              <FeatureItem>Monsanto free</FeatureItem>
              <FeatureItem>Martini sales under the counter</FeatureItem>
              <FeatureItem>Call us, we will come and bake near you</FeatureItem>
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
      </Page>
    )
  }
}

export default withTheme(LandingPage)
