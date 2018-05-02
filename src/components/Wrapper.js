import React from 'react'
import styled from 'styled-components'

const Wrapper = ({ children, background }) => (
  <Outer background={background}>
    <Inner>
      {children}
    </Inner>
  </Outer>
)

export default Wrapper

const Outer = styled.article`
background: ${props => props.background};
`

const Inner = styled.div`
max-width: 1024px;
padding: 1rem;
margin: 0 auto
`