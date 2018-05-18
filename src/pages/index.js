import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Script from 'react-load-script'

import Container from '../components/Container';

export default class IndexPage extends React.Component {

  handleScriptLoad() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on('init', user => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
    window.netlifyIdentity.init();
  }

  render() {

    return (
      <Wrapper>
        {/* <Helmet>
          <title>Vision - Mission - Strategy</title>
        </Helmet> */}

            <Script
              url="https://identity.netlify.com/v1/netlify-identity-widget.js"
              onLoad={this.handleScriptLoad.bind(this)}
            />
            <Container>
              <Heading>Vision<br/>Mission<br/>Strategy</Heading>
              <Tagline>We help to transform beauty and lifestyle brands into successful enterprises in Europe and China. </Tagline>
            </Container>
      </Wrapper>
    )
  }
}

const Wrapper = styled.article`
display: flex;
flex-direction: column;
justify-content: center
text-align: center;
background-image: linear-gradient(180deg, rgba(255, 252, 247, 0) 0%, rgba(255, 252, 247, 0.51) 32.04%, #FFF7F7 100%), url('img/frontpage.png');
background-size: contain;
background-position: 80% 70%;
background-repeat: no-repeat;
flex: 10;
@media screen and (max-width: 600px) {
    justify-content: flex-end;
}
`

const Heading = styled.h1`
text-align: left
font-size: 6rem
font-weight: 300
font-family: Bodoni
text-transform: uppercase
line-height: .9em;
width: 100%;
@media screen and (max-width: 600px) {
  font-size: 16vw;
}
`

const Tagline = styled.p`
text-align: left
font-size: 1.5rem
max-width: 500px
@media screen and (max-width: 600px) {
  font-size: 5vw;
}
`