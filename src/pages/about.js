import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'

import ProfilePic from '../img/profile.jpg'

export default class AboutPage extends React.Component {
  render() {

    return (
      <Wrapper>
            <Heading>About Me</Heading>
            <Container background="#FFFCF7">
              <Column>
                <Believe>We believe in brands with...</Believe>
              </Column>
              <Column>
                <Values>
                  <Value><em>DISTINCTIONS</em></Value>
                  <Value><em>MISSION</em>, <em>FEELINGS</em> and <em>STORY</em> that resonate with people. </Value>
                  <Value><em>DIGITAL AND SOCIAL PRESENCE</em> that allow to clearly, easily <em>TRACE & OPTIMIZE</em> all marketing activities.</Value>
                  <Value>properly defined <em>KPIs</em> that <em>CREATE RESOURCES</em> and not burn them.</Value>
                </Values>
              </Column>
            </Container>
            <Profile>
              <Picture src={ProfilePic} />
              <AboutBox>
                <div>
                <h2>Marketa Hamadakova</h2>
                <h3>Founder & CEO</h3>
                <blockquote>
                "Mutual trust, common goals and values are the heart and soul of my work. I am great believer in connections across people and emotions."
                </blockquote>
                </div>
                <p>
                Marketa's enthusiasm for developing and managing brand identity goes had in had with her expertise in marketing, luxury retail and e-tail business. She is thrilled by reaching to people through strategies and visions that transform the brand and uncover more of its potential. 

Marketa has built up her expertise through various positions in large international as well as local companies alongside her cooperation with individuals and variety of projects.

She was recruited to New York to support East Coast operations of the Czech national trade and investment platform CzechInvest. After her graduation she worked as key account manager for L’́Oreal’s Active Cosmetics Division with responsibility to create and execute its trade marketing plans, promo activities and to manage relations with key B2B partners, just before leading the marketing at Estée Lauder Czech Republic with responsibility for the whole Estée Lauder portfolio, including all marketing activities (print, outdoor, online, digital, promo), trade plans, customer retention, loyalty programs and CRM. She has proven her astuteness, perceptiveness, good judgement and deep understanding of the market and its customers when successfully leading five free standing. Moreover, Marketa's strategic vision and “digital first” approach resulted in attracting greater share of high and luxury clients and also younger generation of Millenials to the stores and the brand itself.

Her experience with Estée Lauder, L’Oréal, Lasvit and special event management during Prague Fashion Week all gave her great insights into brands and made her knowledgeable in the field of luxury, beauty and lifestyle. Knowing the background of the top European brands (digital, retail and exclusive positioning) was clearly a competitive advantage when she started her own marketing and business development consultancy agency while moving in Beijing.
                </p>
              </AboutBox>
            </Profile>
      </Wrapper>
    )
  }
}


const Column = styled.div`
width: 50%
display: flex;
flex-direction: column;
justify-content: center;
align-items: center`

const Believe = styled.h2`
padding-left: 1rem;
border-left: .5rem solid black;
border-style: double;`

const Values = styled.ul`
list-style-type: none;`

const Value = styled.li`
margin: 1rem`

const Profile = styled.section`
display: flex`

const Picture = styled.img`
width: 50%
align-self: flex-start`

const AboutBox = styled.div`
width: 50%
div {
  margin: 1rem
  @media screen and (min-width: 700px) {
    margin-left: -6rem
  }
  blockquote {
    font-style: italic;
    font-weight: 500;
    padding-top: 1rem
  }
}
p {
  padding: 1rem
}`