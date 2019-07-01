import React from 'react'
import Header from './organisms/Header'
import Footer from './organisms/Footer'
import { Wrapper, Container } from './styles'

const App = () => (
  <Wrapper>
    <Container width={1} py={32}>
      <Header />
      <Footer />
    </Container>
  </Wrapper>
)

export default App
