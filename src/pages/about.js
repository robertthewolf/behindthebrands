import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'

import ProfilePic from '../img/profile.jpg'

export default class AboutPage extends React.Component {
  render() {
    const { markdownRemark: post } = this.props.data

    return (
      <Wrapper>
            <Heading>About Me</Heading>
            <Container background="#FFFCF7">
              <Column>
                <Believe>We believe in brands with...</Believe>
              </Column>
              <Column>
                <Values>
                  <Value><em>DISTINCTIONS</em></Value>
                  <Value><em>MISSION</em>, <em>FEELINGS</em> and <em>STORY</em> that resonate with people. </Value>
                  <Value><em>DIGITAL AND SOCIAL PRESENCE</em> that allow to clearly, easily <em>TRACE & OPTIMIZE</em> all marketing activities.</Value>
                  <Value>properly defined <em>KPIs</em> that <em>CREATE RESOURCES</em> and not burn them.</Value>
                </Values>
              </Column>
            </Container>
            <Profile>
              <Picture src={ProfilePic} />
              <AboutBox>
                <div>
                <h2>{post.frontmatter.name}</h2>
                <h3>{post.frontmatter.position}</h3>
                <blockquote>{post.frontmatter.quote}</blockquote>
                </div>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
              </AboutBox>
            </Profile>
      </Wrapper>
    )
  }
}

export const pageQuery = graphql`
query aboutQuery {
  markdownRemark(frontmatter: {templateKey: { eq: "about" }}) {
    html
    frontmatter {
      templateKey
      name
      position
      quote
    }
  }
}
`


const Column = styled.div`
width: 50%
display: flex;
flex-direction: column;
justify-content: center;
align-items: center


@media screen and (max-width: 800px) {
  width: 100%;
}`

const Believe = styled.h2`
margin-top: 2rem;
padding-left: 1rem;
border-left: .5rem solid black;
border-style: double;`

const Values = styled.ul`
list-style-type: none;`

const Value = styled.li`
margin: 2rem 1rem`

const Profile = styled.section`
display: flex

@media screen and (max-width: 600px) {
  flex-direction: column
}`

const Picture = styled.img`
width: 50%
align-self: flex-start

@media screen and (max-width: 600px) {
  width: 100%
  height: calc(100vw - 2rem);
  object-fit: cover;
  object-position: top center
}`

const AboutBox = styled.div`
width: 50%
> *:first-child {
  margin: 1rem
  @media screen and (min-width: 700px) {
    margin-left: -6rem
  }
  blockquote {
    font-style: italic;
    font-weight: 500;
    padding-top: 1rem
  }
}
p {
  padding: 1rem
  opacity: .7
  transition: opacity 1s ease;
  &:hover {
    opacity: 1
  }
}

@media screen and (max-width: 600px) {
  width: 100%
}
`