import React from 'react'
import styled from 'styled-components'

const Reference = ({ html, name, position, company, description }) => (
    <Half>
        <Quote>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Quote>
        <Source>
            <Author>{name}</Author>
            <Position>{position}</Position>
            <Company>{company}</Company>
            <Description>{description}</Description>
        </Source>
    </Half>
)

export default Reference


const Half = styled.p`
width: calc(50% - 2rem);
padding: 1rem;


@media screen and (max-width: 800px) {
  width: calc(100% - 2rem);
}
`

const Quote = styled.blockquote`
font-style: italic;
text-align: justify;
margin-bottom: 2rem`

const Source = styled.div`
font-size: .9rem
@media screen and (min-width: 550px) {
  display: grid
  grid-auto-flow: column;
  grid-template-rows: auto auto
}`

const Author = styled.p`
font-weight: 500`


const Position = styled.p`
padding-bottom: 1rem;
`

const Company = styled.p`
`

const Description = styled.p`
`