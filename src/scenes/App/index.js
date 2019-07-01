import React from 'react'
import { Wrapper, Container, Link } from './styles'

const App = () => (
  <Wrapper>
    <Container width={1} py={64}>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Link
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </Link>
    </Container>
  </Wrapper>
)

export default App
