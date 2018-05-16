import React from 'react'
import styled from 'styled-components'

const Reference = ({ html, title, position, company, description }) => (
    <Half>
        <Quote>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </Quote>
        <Source>
            <Author>{title}</Author>
            <Position>{position}</Position>
            <Company>{company}</Company>
            <Description>{description}</Description>
        </Source>
    </Half>
)

export default Reference


const Half = styled.p`
padding: 5rem 1rem;
width: calc(100% - 2rem);

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
text-align: justify;
margin-bottom: 2rem
em {
    font-size: 1em !important;
    font-weight: inherit;
}`

const Source = styled.div`
font-size: .9rem
@media screen and (min-width: 550px) {
  display: grid
  grid-auto-flow: column;
  grid-template-rows: auto auto
}`

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