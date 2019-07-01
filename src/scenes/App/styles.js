import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'

export const Wrapper = styled(Flex)`
  text-align: center;
`

export const Container = styled(Box)`
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`

export const Link = styled.a`
  color: #61dafb;
`
