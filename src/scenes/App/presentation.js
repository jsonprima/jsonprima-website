import React from 'react'
import GithubCorner from 'react-github-corners'
import 'react-github-corners/dist/GithubCorner.css'
import Header from './organisms/Header'
import Footer from './organisms/Footer'
import Editor from './organisms/Editor'
import { Wrapper, Container } from './styles'

const Presentation = () => (
  <Wrapper>
    <GithubCorner url="https://github.com/jsonprima" target="_blank" />
    <Container width={1} py={32} as="main">
      <Header />
      <Editor />
      <Footer />
    </Container>
  </Wrapper>
)

export default Presentation
