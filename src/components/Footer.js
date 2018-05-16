import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Footer = () => (
  <Container>
      <Message>
          <Link to="/contact">
          Get in touch with us.
          </Link>
        </Message>
  </Container>
)

export default Footer

const Container = styled.div`
padding: 4rem 1rem 2rem;
text-align: center
`

const Message = styled.p`

`