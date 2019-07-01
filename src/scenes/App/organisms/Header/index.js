import React from 'react'
import 'styled-components/macro'
import Title from './atoms/Title'
import Description from './atoms/Description'
import { Wrapper } from './styles'

const Header = () => (
  <Wrapper>
    <Title>
      {'JSON {'} <span css="font-weight: 300;">Prima</span> {'}'}
    </Title>
    <Description>
      Error tolerant RFC 8259 compliant JSON validator in Rust
    </Description>
  </Wrapper>
)

export default Header
