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
        <Link to="/about">
          About
        </Link>
        <Link to="/workflow">
          Workflow
        </Link>
        <Link to="/clients">
          Clients
        </Link>
        <Link to="/contact">
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
  padding: 1rem
}`

const Logo = styled.div`
margin-right: auto
padding: 1rem
img {
  height: 20px
}`