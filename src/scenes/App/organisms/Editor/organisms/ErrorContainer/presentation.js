import React from 'react'
import { Wrapper } from './styles'
import LIST from './atoms/LIST'
import ITEM from './atoms/ITEM'

/**
 * Returns a location string of the error withing the code editor.
 * The substring is calculated using two zero-based
 * index numbers, for the start and end position respectively.
 * Does not include character at `index_end` position.
 *
 * Generated location line and column are 1-indexed based, start
 * value is `1` not `0`. Default line separator is *LF* (`\n`).
 */
function toSourceLocation(code, index_start, index_end) {
  /**
   * Split the provided string into an array of chars.
   */
  const chars = code.split('')

  /**
   * Get the portion of `chars` array from the beginning until `index_start`.
   */
  const substringStartLine = chars.slice(0, index_start).join('')

  /**
   * The line of the first char of the code region.
   */
  const locStartLine = substringStartLine.split('\n').length

  /**
   * The column of the first char of the code region.
   */
  const startLine = substringStartLine.split('\n').pop()
  const locStartColumn = startLine.length

  /**
   * Get the portion of `chars` array from the beginning until `index_end`.
   */
  const substringEndLine = chars.slice(0, index_end).join('')

  /**
   * The line of the first char after the code region with the error.
   */
  const locEndLine = substringEndLine.split('\n').length

  /**
   * The column of the first grapheme after the code region with the error.
   */
  const endLine = substringEndLine.split('\n').pop()
  const locEndColumn = endLine.length

  /**
   * Return the string representation of the error location.
   */
  return `${locStartLine}:${locStartColumn}, ${locEndLine}:${locEndColumn}`
}

const Presentation = ({ errors, code }) => (
  <Wrapper flexDirection="column" alignItems="center">
    <LIST>
      {errors.map((error, index) => (
        <ITEM key={index}>{`${error.code}(${toSourceLocation(
          code,
          error.index_start,
          error.index_end,
        )}) ${error.description}`}</ITEM>
      ))}
    </LIST>
  </Wrapper>
)

export default Presentation
