import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Heading from '../components/Heading'
import Container from '../components/Container'

export default class IndexPage extends React.Component {
  render() {

    return (
      <Wrapper>
        <Heading>Contact</Heading>
        <Container  background="#E4E7EB">
          <Half>
            <h2>Marketa Hamadakova</h2>
            <a href="tel:+8618526403753">M Asia + 86 185 2640 3753</a><br />
            <a href="tel:+420605863268">M Europe +420 605 863 268</a><br />
            <a href="mailto:marketa@behindthebrands.net">marketa@behindthebrands.net</a>
          </Half>
          <Half>
          <h2>Behind The Brands Ltd.</h2>
            <p>RM B 19/F KAM CHING COMM BLDG<br/>19-21 HENESSY RD WAMCHAI<br/>HONG KONG </p>
          </Half>
        </Container>
        <Signature>{(new Date()).getFullYear()} ❤️ Web developed by <a href="http://robertwolf.cz/" target="_blank">Robert Wolf</a></Signature>
      </Wrapper>
    )
  }
}

const Wrapper = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
background: linear-gradient(180deg, rgba(255, 252, 247, 0) 0%, rgba(255, 252, 247, 0.51) 32.04%, #FFF7F7 100%);

min-height: calc(100vh - 88px);

@media screen and (max-width: 650px) {
  min-height: calc(100vh - 141px);
}
`


const Half = styled.p`
padding: 1rem;
width: calc(100% - 2rem);
a {
  font-weight: 200;
}

@media screen and (min-width: 800px) {
  width: calc(50% - 2rem);
}

`

const Signature = styled.p`
text-align: center;
margin: auto auto 0;
padding: 2rem 1rem`