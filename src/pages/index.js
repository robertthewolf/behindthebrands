import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Script from 'react-load-script'

import Heading from '../components/Heading'

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
            <Script
              url="https://identity.netlify.com/v1/netlify-identity-widget.js"
              onLoad={this.handleScriptLoad.bind(this)}
            />
            <Heading>Vision<br/>Mission<br/>Strategy</Heading>
            <p>We help to transform beauty and lifestyle brands into successful enterprises. </p>
      </Wrapper>
    )
  }
}

const Wrapper = styled.article`
height: calc(100vh - 88px);
display: flex;
flex-direction: column;
justify-content: center
text-align: center;
background: linear-gradient(180deg, rgba(255, 252, 247, 0) 0%, rgba(255, 252, 247, 0.51) 32.04%, #FFF7F7 100%);
`