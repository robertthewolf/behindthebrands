import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from '../img/logo.svg'

const Navbar = () => (
  <Nav>
      <Logo>
        <Link to="/">
            <img src={logo} alt="Kaldi" />
        </Link>
      </Logo>
        <Link activeClassName="active" to="/about">
          About
        </Link>
        <Link activeClassName="active" to="/workflow">
          Workflow
        </Link>
        <Link activeClassName="active" to="/clients">
          Clients
        </Link>
        <Link activeClassName="active" to="/contact">
          Contact
        </Link>
  </Nav>
)

export default Navbar


const Nav = styled.nav`
max-width: 1024px
margin: 1rem auto
display: flex
& > a {
  margin: 1rem
  &::before {
    content: '';
    position: absolute
    left: 0
    bottom: -.1rem
    width: 100%
    height: .3rem;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: all .5s ease
    background-color: black
    opacity: .5
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

const Logo = styled.div`
margin-right: auto
padding: 1rem
img {
  height: 20px
}`