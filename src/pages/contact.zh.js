import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Heading from '../components/Heading'
import Container from '../components/Container'


export default class ContactPage extends React.Component {
  render() {

    return (
      <SuperWrapper>
        <Heading>联系方式</Heading>
        <Container  background="#E4E7EB">
          <Half>
            <h2>Marketa Hamadakova</h2>
            <a href="tel:+8618526403753">中国：+ 86 185 2640 3753</a><br />
            <a href="tel:+420605863268">欧洲：+420 605 863 268</a><br />
            <a href="mailto:marketa@behindthebrands.net">电子邮箱：marketa@behindthebrands.net</a>
          </Half>
          <Half>
          <h2>Behind The Brands Ltd.</h2>
            <p>B 19/F金钟商业大厦<br/>湾仔轩尼诗道19-21号<br/>香港</p>
          </Half>
        </Container>
      </SuperWrapper>
    )
  }
}

const SuperWrapper = styled.article`
display: flex;
flex-direction: column;
justify-content: center;
background: linear-gradient(180deg, rgba(255, 252, 247, 0) 0%, rgba(255, 252, 247, 0.51) 32.04%, #FFF7F7 100%);

min-height: calc(100vh - 88px);

@media screen and (max-width: 650px) {
  min-height: calc(100vh - 141px);
}
`


const Half = styled.p`
padding: 1rem;
text-align: center;
width: calc(100% - 2rem);
a {
  font-weight: 200;
}

@media screen and (min-width: 800px) {
  width: calc(50% - 2rem);
}

`
