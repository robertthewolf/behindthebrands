import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Reference from '../components/Reference'
import Footer from '../components/Footer'

export default class ReferencePage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark

    return (
      <Wrapper>
        <Logo src="img/estee_lauder.svg" alt="Estee Lauder" left="80" top="15" />
        <Logo src="img/lasvit.svg" alt="Lasvit" left="60" top="40" delay="3" />
        <Logo src="img/loreal.svg" alt="L'Oreal" left="15" top="18" delay="8" />
        <Logo src="img/velaa.svg" alt="VELLA" left="30" top="35" delay="5" />
            <Heading>Reference</Heading>
            <Container>
            {posts.filter(post => post.node.frontmatter.templateKey === 'reference')
            .map(({ node: post }) => (
                <Reference
                  html={post.html}
                  title={post.frontmatter.title}
                  position={post.frontmatter.position}
                  company={post.frontmatter.company}
                  description={post.frontmatter.description}
                />
            ))}
            </Container>
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
      <Footer />
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
          title
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

const Logo = styled.img`
position: absolute;
max-height: 5vw;
max-width: 10vw;
left: ${props => props.left}%;
top: ${props => props.top}%;
opacity: .3
animation: floating 10s ease-in-out infinite forwards;
animation-delay: ${props => props.delay}s;
`