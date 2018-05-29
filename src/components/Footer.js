import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Footer = () => (
  <Container>
      <Message>
          <Link to="/contact">
          CONTACT US NOW.
          </Link>
      </Message>
      <Message>
        {(new Date()).getFullYear()} © designed & developed by <a href="http://robertwolf.cz/" target="_blank">Robert Wolf</a>
      </Message>
  </Container>
)

export default Footer

const Container = styled.div`
padding: 4rem 1rem 0;
text-align: center
`

const Message = styled.p`
margin-bottom: 2rem
`