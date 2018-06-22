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
            <Heading>VIP推荐</Heading>
            <Container>
            {posts.filter(post => post.node.frontmatter.templateKey === 'referencezh')
            .map(({ node: post }) => (
                <Reference
                  html={post.html}
                  title={post.frontmatter.title}
                  image={post.frontmatter.image}
                  position={post.frontmatter.position}
                  company={post.frontmatter.company}
                  description={post.frontmatter.description}
                  logo={post.frontmatter.logo}
                />
            ))}
            </Container>
            <Container background="#E4E7EB">
              <Center>
                <Believe>我们相信…</Believe>
                <Values>
                  <Value>热情，情感和努力工作</Value>
                  <Value>以人为本</Value>
                  <Value>与客户间的互信，同客户共建牢固的纽带</Value>
                </Values>
              </Center>
            </Container>
        <Footer zh />
      </Wrapper>
    )
  }
}

export const pageQuery = graphql`
query refZhQuery {
  allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
    edges {
      node {
        id
        html
        frontmatter {
          templateKey
          order
          title
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
          position
          logo
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
