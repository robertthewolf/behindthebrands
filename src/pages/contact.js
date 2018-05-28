import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Heading from '../components/Heading'
import Container from '../components/Container'
import Reference from '../components/Reference'
import Footer from '../components/Footer'

import ReferencePage from "./reference"

export default class ContactPage extends React.Component {
  render() {
    const { edges: posts } = this.props.data.allMarkdownRemark
    

    return (
      <SuperWrapper>
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
        <Container>
            {posts.filter(post => post.node.frontmatter.templateKey === 'reference').map(({ node: post }) => (
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
                <Believe>We believe in...</Believe>
                <Values>
                  <Value><em>PASSION</em>, <em>EMOTIONS</em> and <em>HARD WORK.</em></Value>
                  <Value><em>CONNECTING PEOPLE</em></Value>
                  <Value><em>MUTUAL TRUST</em> between us and our clients to create a strong bond with customers. </Value>
                </Values>
              </Center>
            </Container>
        <Footer/>
      </SuperWrapper>
    )
  }
}

export const pageQuery = graphql`
query contactQuery {
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
              sizes {
                ...GatsbyImageSharpSizes
              }
            }
          }
          position
          company
          description
          logo
        }
      }
    }
  }
}`


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
