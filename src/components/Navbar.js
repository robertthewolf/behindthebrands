import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../img/logo.svg'

const Navbar = () => (
  <Header>
      <Logo>
        <Link to="/">
            <img src={logo} alt="Kaldi" />
        </Link>
      </Logo>
      <Nav>
        <div>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/workflow">
          Workflow
        </Link>
        </div>
        <div>
        <Link activeClassName="active" to="/reference">
          Reference
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
        </div>
      </Nav>
  </Header>
)

export default Navbar


const Header = styled.header`
max-width: 1024px
width: 100%;
margin: 1rem auto
display: flex
justify-content: space-between;
align-items: center;



@media screen and (max-width: 650px) {
  flex-direction: column;
}
`

const Logo = styled.div`
padding: 1rem
img {
  height: 20px
  max-width: 80vw;
}

@media screen and (max-width: 650px) {
  text-align: center
}
`

const Nav = styled.nav`
display: flex;
justify-content: space-around;
max-width: 100%;
flex-wrap: wrap;

div {
  display: flex;
  justify-content: space-around;
  max-width: 100%;
  flex-wrap: wrap;
}

a {
  margin: 1rem
  &::before {
    content: '';
    position: absolute
    left: 0
    bottom: -.1rem
    width: 100%
    height: .3rem;
    transform: scaleY(.5);
    transform-origin: center bottom;
    transition: all .5s ease
    background-color: black
    opacity: 0
  }
  &:hover {
    text-decoration: none;
    &::before {
      opacity: .3
      transform: scaleY(1);
    }
  }
  &.active {
    &::before {
      transform: scaleY(2);
      opacity: .1
    }
  }
}
`