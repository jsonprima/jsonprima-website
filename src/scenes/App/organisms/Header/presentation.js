import React from 'react'
import 'styled-components/macro'
import Title from './atoms/Title'
import Description from './atoms/Description'
import { Wrapper } from './styles'

const Presentation = () => (
  <Wrapper>
    <Title>
      {'JSON {'} <span css="font-weight: 300;">Prima</span> {'}'}
    </Title>
    <Description>RFC 8259 compliant JSON validator</Description>
  </Wrapper>
)

export default Presentation
