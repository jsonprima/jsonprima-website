import React from 'react'
import Header from './organisms/Header'
import { Wrapper, Container } from './styles'

const App = () => (
  <Wrapper>
    <Container width={1} py={32}>
      <Header />
    </Container>
  </Wrapper>
)

export default App
