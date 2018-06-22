import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const Footer = ({ zh }) => (
  <Container>
      <Message>
          <Link to="/contact">
          {zh? '立即联系我们' : 'CONTACT US NOW.'}
          </Link>
      </Message>
      <Message>
        {(new Date()).getFullYear()} © 
        <span  dangerouslySetInnerHTML={{__html:  + zh ? ` <a href="http://robertwolf.cz/" target="_blank">由罗伯特·沃尔夫</a>设计开发` : ` designed & developed by <a href="http://robertwolf.cz/" target="_blank">Robert Wolf</a>`}}></span>
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