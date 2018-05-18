import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
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
    const { markdownRemark: post } = this.props.data

    return (
      <Wrapper>
        <Background>
        <Image sizes={post.frontmatter.image.childImageSharp.sizes}
        css={{
          width: '100%',
          height: '80vh',
          objectFit: 'contain',
          overflow: 'hidden',
          zIndex: -2
        }}
        />
        </Background>
        <Helmet>
          <title>{post.frontmatter.name}</title>
        </Helmet>
            <Script
              url="https://identity.netlify.com/v1/netlify-identity-widget.js"
              onLoad={this.handleScriptLoad.bind(this)}
            />
            <Container>
              <Heading>{post.frontmatter.name}</Heading>
              <Tagline>{post.frontmatter.tagline}</Tagline>
            </Container>
      </Wrapper>
    )
  }
}

export const frontpageQuery = graphql`
query frontpageQuery {
  markdownRemark(frontmatter: {templateKey: { eq: "frontpage" }}) {
    frontmatter {
      templateKey
      name
      image {
        childImageSharp {
          sizes(
            quality: 100,
            traceSVG: {
              color: "rgb(20, 20, 20)",
              threshold: 95
            },
            toFormat: JPG
          ) {
            ...GatsbyImageSharpSizes_tracedSVG
            aspectRatio
          }
        }
      }
      tagline
    }
  }
}
`

const Background = styled.div`
position: absolute;
bottom: 0;
left: 20%;
width: 100%;
z-index: -2;`

const Wrapper = styled.article`
display: flex;
flex-direction: column;
justify-content: center
text-align: center;
background-image: linear-gradient(180deg, rgba(255, 252, 247, 0) 0%, rgba(255, 252, 247, 0.51) 32.04%, #FFF7F7 100%);
flex: 10;
@media screen and (max-width: 600px) {
    justify-content: flex-end;
}
> div {
  display: block;
}
img {
  object-fit: contain !important;
  z-index: -2;
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
max-width: 500px;
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