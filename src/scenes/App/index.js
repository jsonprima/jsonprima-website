import React from 'react'
import { Wrapper, Header, Link } from './styles'

const App = () => (
  <Wrapper>
    <Header>
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
    </Header>
  </Wrapper>
)

export default App
