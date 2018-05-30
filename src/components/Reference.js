import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Reference = ({ html, title, image, position, logo }) => (
    <Half>
        <Quote>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Quote>
        <Source>
            <Avatar><Image sizes={image.childImageSharp.sizes}/></Avatar>
            <div>
            <Author>{title}</Author>
            <Position>{position}</Position>
            </div>
            <Logo src={logo} />
        </Source>
    </Half>
)

export default Reference


const Half = styled.p`
padding: 5rem 1rem;

@media screen and (max-width: 500px) {
    padding: 3rem 0
}

@media screen and (min-width: 600px) {

    width: calc(70% - 2rem);
    &:nth-child(2n + 1) {
        margin-right: auto
    }
    &:nth-child(2n) {
        margin-left: auto
    }
}
`

const Quote = styled.blockquote`
font-style: italic;
margin-bottom: 1.5rem;
background-color: whitesmoke;
padding: 1.5rem

@media screen and (max-width: 400px) {
    padding: 1rem
}

em {
    font-size: 1em !important;
    font-weight: inherit;
}

img {
    max-width: calc(50% - 1.2rem);
    margin: 1rem .5rem 0;
    display: inline-block
}
`

const Source = styled.div`
font-size: .9rem
@media screen and (max-width: 550px) {
    text-align: center
}

@media screen and (min-width: 550px) {
  display: flex;
  align-items: flex-start;
}

`

const Avatar = styled.div`
width: 4rem;
border-radius: 50%;
overflow: hidden;
margin-right: 1rem;
@media screen and (max-width: 550px) {
    margin: 0 auto .5rem;
}
`

const Author = styled.p`
font-weight: 500
font-size: 1.2em;
padding-right: 1rem;`


const Position = styled.p`
padding-bottom: 1rem;
padding-right: 1rem;
`

const Company = styled.p`
font-size: 1.2em;
`

const Description = styled.p`
`

const Logo = styled.img`
max-height: 4rem;
max-width: 10rem;
margin-left: auto;
`