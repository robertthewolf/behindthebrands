import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'

import Wrapper from '../components/Wrapper'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Footer from '../components/Footer'

//graphics
import arrow from '../img/arrow.svg'
import ear from '../img/ear.svg'
import understand from '../img/understand.svg'
import question from '../img/question_mark.svg'
import force from '../img/arrow_orange.svg'
import brand from '../img/brand.svg'
import promoted from '../img/promoted.svg'
import framed from '../img/framed.svg'
import message from '../img/message.svg'
import sell from '../img/sell.svg'

import background from '../img/workflow.jpg'


export default class IndexPage extends React.Component {
  render() {

    return (
    <div>
      <Wrapper>
        <Background background={background} />
            <Heading>工作流程</Heading>
            <Subheading><em>我们的成果有形、真实并且始终可见。</em>您的愿景将转化为全渠道，“数字优先”战略会让您的品牌更具个性。我们的成果是有形的、真实的、始终可见的。</Subheading>
            <Box>
                <p>品牌形象开发是一个令人兴奋的创新过程，是一个始终需要沟通的协作过程。我们愿与我们客户全心全意地分享——拥有共同的目标和价值观。</p>
            </Box>
      </Wrapper>
      <Wrapper background='#F9F9F9'>
            <Stage number='1'>我们问</Stage>
            <Container background='white'>
              <Half>我们愿意聆听并理解我们的客户。</Half>
              <Half>客户品牌的需求是什么以及目标群体对品牌的感受如何</Half>
              <Half>客户的个人经历是什么，什么驱使了他们对未来的期待。</Half>
              <Half>品牌应该怎样被推广制定。</Half>
              <Half>品牌的驱动力应该是什么</Half>
              <Half>我们想要传递什么类型的信息并最终销售。</Half>

            </Container>
      </Wrapper>
      <Wrapper background='#FFFCF7'>
            <Stage number='2'>我们使用</Stage>
            <Container background='white'>
              <Third>我们完善的策略</Third>
              <Third>创造力</Third>
              <Third>和我们团队的承诺</Third>
            </Container>
      </Wrapper>
      <Wrapper background='#E3EAE9'>
            <Stage number='3'>我们提供</Stage>
            <Container background='white'>
              <Third>具有更高净推荐值（NPS）的更好的产品</Third>
              <Third>更积极的感觉</Third>
              <Third>和真实价值</Third>
            </Container>
            <Container>
              <Third>我们完全符合我们客户的特殊需求</Third>
              <Third><Arrow src={arrow} alt="arrow" /></Third>
              <Third>并将它们转化为有形的结果</Third>
            </Container>
      <Footer zh />
      </Wrapper>
    </div>
    )
  }
}

const Background = styled.div`
background-image: url(${props => props.background});
background-size: cover;
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: -2;
opacity: .10;
`

const Subheading = styled.p`
text-align: center;
margin: 1rem auto;
max-width: 720px`

const Box = styled.section`
margin: 2rem 0;
max-width: 500px
padding: 2rem;
background: #FFFCF7;
display: flex;`

const Stage = styled.h2`
text-align: center;
padding: 4rem;
position: relative;
&::before {
    content: '${props => props.number}';
    position: absolute;
    font-family: Bodoni, serif;
    font-size: 5em;
    opacity: .1
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
}
`


const Half = styled.p`
width: calc(50% - 2rem);
padding: 1rem;
position: relative;
em {
  position: relative;
}

@media screen and (max-width: 800px) {
  width: calc(100% - 2rem);
}
`

const Third = styled.p`
width: calc(100% / 3 - 2rem);
padding: 1rem;
text-align: center;
em {
  display: block;
}

@media screen and (max-width: 730px) {
  width: calc(100% - 2rem);
}
`

const Illustration = styled.img`
position: absolute;
z-index: -1;
top: ${props => props.y}px;
right: ${props => props.x}px;
`

const Arrow = styled.img`
max-width: 100%
@media screen and (max-width: 730px) {
  transform: rotate(90deg) scale(.3);
}`
