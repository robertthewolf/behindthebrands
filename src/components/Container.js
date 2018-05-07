import React from 'react'
import styled from 'styled-components'

const Container = ({ children, background }) => (
  <Outer background={background}>
      {children}
  </Outer>
)

export default Container

const Outer = styled.div`
max-width: 1024px;
padding: 1rem;
margin: 2rem auto;
background-color: ${props => props.background};
display: flex;
flex-wrap: wrap;
align-items: center
opacity: 0
animation: showUp .3s ease .3s forwards;
> * {
}`