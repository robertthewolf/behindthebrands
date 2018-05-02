import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'

import ProfilePic from '../img/profile.jpg'

export default class ClientsPage extends React.Component {
  render() {

    return (
      <Wrapper>
            <Heading>Clients</Heading>
            <Container background="#E4E7EB">
              <Center>
                <Believe>We believe in...</Believe>
                <Values>
                  <Value><em>PASSION</em>, <em>EMOTIONS</em> and <em>HARD WORK.</em></Value>
                  <Value><em>CONNECTING PEOPLE</em></Value>
                  <Value><em>MUTUAL TRUST</em> between us and our clients to create a strong bond with customers. </Value>
                </Values>
              </Center>
            </Container>
            <Container>
              <Half>
                <Quote>
                "Marketa's sensitive approach, great taste and perfect organization with attention to the details is why I continue rely on her professional opinion and assistance with communication with our affluent clients in China."
                </Quote>
                <Source>
                  <div>
                    <p>Michal Smejc</p>
                    <p>General Manager </p>
                  </div>
                  <div>
                    <p>VELAA Private Island Maldives</p>
                    <p>The most luxurious Maldivian private resort.</p>
                  </div>
                </Source>
              </Half>
            </Container>
      </Wrapper>
    )
  }
}

const Center = styled.div`
width: 100%;
text-align: center;`


const Believe = styled.h2`
margin-top: 2rem;
display: inline-block;
padding-bottom: .5rem;
border-bottom: .5rem solid black;
border-style: double;`

const Values = styled.ul`
list-style-type: none;`

const Value = styled.li`
margin: 1rem`

const Half = styled.p`
width: calc(50% - 2rem);
padding: 1rem;
`

const Quote = styled.blockquote`
font-style: italic;
text-align: justify;
margin-bottom: 2rem`

const Source = styled.div`
display: flex;`