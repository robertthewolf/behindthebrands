import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'

//graphics
import arrow from '../img/arrow.svg'

export default class IndexPage extends React.Component {
  render() {

    return (
    <div>
      <Wrapper>
            <Heading>Workflow</Heading>
            <Subheading>
                <em>We deliver personalized, made-to measure marketing and business development.</em><br/>We take your vision and shape it to omni channel, "digital first" strategy that will bring you stronger identity for your brand. Our results are tangible, real and always visible. </Subheading>
            <Box>
                <p>Developing <em>BRAND</em> identity is exciting and innovative. It is also communicative and collaborative process. We want to share hearts and minds with our clients. To have common goals and shared values. </p>
            </Box>
      </Wrapper>
      <Wrapper background='#F9F9F9'>
            <Stage number='1'>we ask</Stage>
            <Container background='white'>
              <Half>We want to <em>LISTEN</em> and <em>UNDERSTAND</em> our clients.</Half>
              <Half>What are the needs of their <em>BRANDS</em> and how customers feel about them. </Half>
              <Half>What is their <em>PERSONAL EXPERIENCE</em> and what is driving their future <em>EXPECTATIONS.</em></Half>
              <Half>How should be brand <em>PROMOTED</em> and <em>FRAMED.</em></Half>
              <Half>What should be its <em>DRIVING FORCE.</em></Half>
              <Half>What kind of <em>MESSAGE</em> we want to deliver and ultimately <em>SELL.</em></Half>

            </Container>
      </Wrapper>
      <Wrapper background='#FFFCF7'>
            <Stage number='2'>we use</Stage>
            <Container background='white'>
              <Third>our well-developed<em>SENSE OF STRATEGY</em></Third>
              <Third>packed with the<em>CREATIVE POWER</em></Third>
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
      </Wrapper>
    </div>
    )
  }
}

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

const Arrow = styled.img`
max-width: 100%
@media screen and (max-width: 730px) {
  transform: rotate(90deg) scale(.3);
}`