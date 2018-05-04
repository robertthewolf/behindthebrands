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
    const { edges: posts } = this.props.data.allMarkdownRemark

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
            {posts
            .filter(post => post.node.frontmatter.templateKey === 'reference')
            .map(({ node: post }) => (
                <Half>
                  <Quote>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                  </Quote>
                  <Source>
                    <Author>{post.frontmatter.name}</Author>
                    <Position>{post.frontmatter.position}</Position>
                    <Company>{post.frontmatter.company}</Company>
                    <Description>{post.frontmatter.description}</Description>
                  </Source>
                </Half>
            ))}
            </Container>
      </Wrapper>
    )
  }
}

export const pageQuery = graphql`
query refQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        html
        frontmatter {
          templateKey
          name
          position
          company
          description
        }
      }
    }
  }
}
`

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
margin: 2rem 1rem`

const Half = styled.p`
width: calc(50% - 2rem);
padding: 1rem;


@media screen and (max-width: 800px) {
  width: calc(100% - 2rem);
}
`

const Quote = styled.blockquote`
font-style: italic;
text-align: justify;
margin-bottom: 2rem`

const Source = styled.div`
font-size: .9rem
@media screen and (min-width: 550px) {
  display: grid
  grid-auto-flow: column;
  grid-template-rows: auto auto
}`

const Author = styled.p`
font-weight: 500`


const Position = styled.p`
padding-bottom: 1rem;
`

const Company = styled.p`
`

const Description = styled.p`
`