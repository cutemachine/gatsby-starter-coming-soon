import React from 'react'
import Link from 'gatsby-link'
import styled, { withTheme } from 'styled-components'
import { Flex, Box } from 'grid-styled'
import { width, space, fontSize, color } from 'styled-system'
import {
  Muffin,
  Coffee,
  H2Box,
  P
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

const ColorBox = styled(Box)`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  line-height: 1.1em;
`

const IconBox = ColorBox.extend`
  border-top: 1px solid #555;
  text-align: center;
  width: 200px;
  > p {
    margin-top: 2em;
    color: white;
  }
  > svg {
   margin-top: 1em;
 }
`

class AboutPage extends React.Component {
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
              <H2Box is='h1' py={1}>{`About ${config.projectName}`}</H2Box>
            </Box>
          </div>
        </Hero>
        <ColorBox py={4} bg='superLightGray' px={[1, 6]}>
          <Flex wrap style={{maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
            <ColorBox is='h2' color='lightFontGray' fontSize={1} w={1} pt={3} py={1}>
              Address
            </ColorBox>
            <ColorBox is='h3' fontSize={[3, 3, 4]} w={[1, 1, 1 / 2]} py={1}>
              Where is your bakery? Is it really near me?
            </ColorBox>
            <ColorBox is='section' fontSize={0} w={[1, 1, 1 / 2]}>
              <P>Well, we are a pop-up bakery. We are here and there. If you subscribe to our newsletter, we will let you know well in advance where we pop up. If you like us to bake near you, just let us know where you want us to show up.</P>
            </ColorBox>
          </Flex>
        </ColorBox>
        <ColorBox color='white' bg='blueBlack' py={4}>
          <Flex wrap>
            <ColorBox is='h2' color='smallTitleLightDark' fontSize={1} w={1} pl={1} pt={3} py={1}>
              Ingredients
            </ColorBox>
            <ColorBox is='h3' fontSize={[3, 3, 4]} w={[1, 1, 1 / 2]} px={1} py={1}>
              What do you use to make your Muffins?
            </ColorBox>
            <ColorBox is='section' fontSize={0} w={[1, 1, 1 / 2]} px={1}>
              <P>You’ve spent years finding perfect recipies. And, as you might know, recipies only work with the best ingredients. If you will have tasted one of our muffins you will not be able to eat others anymore.</P>
            </ColorBox>
          </Flex>
        </ColorBox>
        <ColorBox is='section' color='white' bg='darkBlueBlack' py={4}>
          <ColorBox is='section' color='smallTitleLightDark' w={[1, '500px']} mx={'auto'} px={1} pt={3}>
            <h3>Let us bake for you.</h3>
            <P py={1}>We love what we do. Let us know where we should show up and we will treat you with the best pastry on the planet.</P>
          </ColorBox>
        </ColorBox>
        <ColorBox is='section' color='white' bg='blueBlack' py={4}>
          <Flex align='center'>
            <ColorBox is='h2' color='smallTitleLightDark' f={5} mx='auto' px={1} pt={3} pb={4}>
              What else will you sell in the pop-up bakery?
            </ColorBox>
          </Flex>
          <Flex wrap>
            <Box mx='auto' py={1}>
              <IconBox color='smallTitleLightDark' mx={1} pt={3}>
                <Coffee width='2em' height='2em' fill='#868F99' />
                <P>We serve decaf super honey lattes.</P>
              </IconBox>
            </Box>
            <Box mx='auto' py={1}>
              <IconBox color='smallTitleLightDark' mx={1} px={1} pt={3}>
                <Muffin width='2em' height='2em' fill='#868F99' />
                <P>Fresh muffins from the oven.</P>
              </IconBox>
            </Box>
            <Box mx='auto' py={1}>
              <IconBox color='smallTitleLightDark' mx={1} px={1} pt={3}>
                <Coffee width='2em' height='2em' fill='#868F99' />
                <P>We also serve Americanos.</P>
              </IconBox>
            </Box>
            <Box mx='auto' py={1}>
              <IconBox color='smallTitleLightDark' mx={1} px={1} pt={3}>
                <Muffin width='2em' height='2em' fill='#868F99' />
                <P>More fresh muffins from the oven.</P>
              </IconBox>
            </Box>
          </Flex>
        </ColorBox>
        <Flex wrap>
          <ColorBox color='black' bg='white' w={[1, 1, 1 / 2]} py={4}>
            <ColorBox is='h3' fontSize={[3, 3, 4]} w={[1, 1, 1]} px={1} py={1}>
              Simply the best muffins in the whole universe.
            </ColorBox>
            <ColorBox is='section' fontSize={0} w={[1, 1, 1]} px={1}>
              <P>I had been lucky once and stumbled upon the secret pop-up bakery. I am not the same person since. I gained at least 20 pounds and look so much better now. Thank you, Pop-Up Bakery.</P>
            </ColorBox>
          </ColorBox>
          <ColorBox color='black' bg='white' w={[1, 1, 1 / 2]} py={4}>
            <ColorBox is='h3' fontSize={[3, 3, 4]} w={[1, 1, 1]} px={1} py={1}>
              These muffins are so much tastier and safer than pretzels.
            </ColorBox>
            <ColorBox is='section' fontSize={0} w={[1, 1, 1]} px={1}>
              <P>Pretzels always made me thirsty. This is why I switched to muffins instead. No complaints so far. Theay work as expected. 5 Stars.</P>
            </ColorBox>
          </ColorBox>
        </Flex>
      </Page>
    )
  }
}

export default withTheme(AboutPage)
