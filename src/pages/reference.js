import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Reference from '../components/Reference'

export default class ReferencePage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark

    return (
      <Wrapper>
            <Heading>Reference</Heading>
            <Container background="#E4E7EB">
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
            <Container>
              <Center>
                <Believe>We believe in...</Believe>
                <Values>
                  <Value><em>PASSION</em>, <em>EMOTIONS</em> and <em>HARD WORK.</em></Value>
                  <Value><em>CONNECTING PEOPLE</em></Value>
                  <Value><em>MUTUAL TRUST</em> between us and our clients to create a strong bond with customers. </Value>
                </Values>
              </Center>
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
