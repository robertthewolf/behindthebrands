import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Footer from '../components/Footer'

//graphics
import arrow from '../img/arrow.svg'
import ear from '../img/ear.svg'
import understand from '../img/understand.svg'
import question from '../img/question_mark.svg'
import force from '../img/arrow_orange.svg'
import brand from '../img/brand.svg'
import promoted from '../img/promoted.svg'
import framed from '../img/framed.svg'
import message from '../img/message.svg'
import sell from '../img/sell.svg'

import background from '../img/workflow.jpg'


export default class IndexPage extends React.Component {
  render() {

    return (
    <div>
      <Wrapper>
        <Background background={background} />
            <Heading>Workflow</Heading>
            <Subheading><em>We provide personalized, made-to measure marketing and business development.</em>We take your vision and transform it into omnichannel, "digital-first" strategy that will give your brand a stronger identity. Our results are tangible, real and always visible. </Subheading>
            <Box>
                <p>Developing <em>BRAND</em> identity is exciting and innovative. It is always a collaborative process requiring communication. We want to share the hearts and minds with our clients – to have common goals and shared values.</p>
            </Box>
      </Wrapper>
      <Wrapper background='#F9F9F9'>
            <Stage number='1'>we ask</Stage>
            <Container background='white'>
              <Half>We want to <em>LISTEN<Illustration src={ear} x='-5' y='-25'/></em> and <em>UNDERSTAND<Illustration src={understand} x='-12' y='25'/></em> our clients.</Half>
              <Half>What are the needs of their <em>BRANDS</em> and how customers feel about them.<Illustration src={brand} x='-10' y='-10'/></Half>
              <Half>What is their <em>PERSONAL EXPERIENCE</em> and what is driving their future <em>EXPECTATIONS.</em><Illustration src={question} x='5' y='0'/></Half>
              <Half>How should be brand <em>PROMOTED<Illustration src={promoted} x='5' y='-30'/></em> and <em>FRAMED.<Illustration src={framed} x='-6' y='-12'/></em></Half>
              <Half>What should be its <em>DRIVING FORCE.<Illustration src={force} x='-70' y='-2'/></em></Half>
              <Half>What kind of <em>MESSAGE<Illustration src={message} x='-7' y='-5'/></em> we want to deliver and ultimately <em>SELL.<Illustration src={sell} x='-25' y='-25'/></em></Half>

            </Container>
      </Wrapper>
      <Wrapper background='#FFFCF7'>
            <Stage number='2'>we use</Stage>
            <Container background='white'>
              <Third>our well-developed<em>SENSE OF STRATEGY</em></Third>
              <Third><em>CREATIVE POWER</em></Third>
              <Third>and<em>COMMITMENT</em>of our team</Third>
            </Container>
      </Wrapper>
      <Wrapper background='#E3EAE9'>
            <Stage number='3'>we deliver</Stage>
            <Container background='white'>
              <Third> a better<em>PRODUCT</em>with higher NPS</Third>
              <Third>more positive <em>FEELING</em></Third>
              <Third>and <em>REAL VALUE</em></Third>
            </Container>
            <Container>
              <Third> We match perfectly the<em>SPECIFIC NEEDS</em>of our clients</Third>
              <Third><Arrow src={arrow} alt="arrow" /></Third>
              <Third> and transform them into<em>TANGIBLE RESULTS</em></Third>
            </Container>
      <Footer />
      </Wrapper>
    </div>
    )
  }
}

const Background = styled.div`
background-image: url(${props => props.background});
background-size: cover;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: -2;
opacity: .10;
`

const Subheading = styled.p`
text-align: center;
margin: 1rem auto;
max-width: 720px`

const Box = styled.section`
margin: 2rem 0;
max-width: 500px
padding: 2rem;
background: #FFFCF7;
display: flex;`

const Stage = styled.h2`
text-align: center;
padding: 4rem;
position: relative;
&::before {
    content: '${props => props.number}';
    position: absolute;
    font-family: Bodoni, serif;
    font-size: 5em;
    opacity: .1
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
}
`


const Half = styled.p`
width: calc(50% - 2rem);
padding: 1rem;
position: relative;
em {
  position: relative;
}

@media screen and (max-width: 800px) {
  width: calc(100% - 2rem);
}
`

const Third = styled.p`
width: calc(100% / 3 - 2rem);
padding: 1rem;
text-align: center;
em {
  display: block;
}

@media screen and (max-width: 730px) {
  width: calc(100% - 2rem);
}
`

const Illustration = styled.img`
position: absolute;
z-index: -1;
top: ${props => props.y}px;
right: ${props => props.x}px;
`

const Arrow = styled.img`
max-width: 100%
@media screen and (max-width: 730px) {
  transform: rotate(90deg) scale(.3);
}`
