import React from 'react'
import Header from './organisms/Header'
import Footer from './organisms/Footer'
import Editor from './organisms/Editor'
import { Wrapper, Container } from './styles'

const Presentation = () => (
  <Wrapper>
    <Container width={1} py={32} as="main">
      <Header />
      <Editor />
      <Footer />
    </Container>
  </Wrapper>
)

export default Presentation
