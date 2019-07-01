import React from 'react'
import 'styled-components/macro'
import { Wrapper } from './styles'

const Footer = () => (
  <Wrapper>
    Made with{' '}
    <span role="img" aria-label="love" css="font-size: 1.2em; color: #D7598B;">
      ❤️
    </span>{' '}
    by George Gkasdrogkas
  </Wrapper>
)

export default Footer
