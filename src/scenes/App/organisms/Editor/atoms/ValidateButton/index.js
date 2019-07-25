import styled from 'styled-components'

const ValidateButton = styled.button`
  border: 0;
  background: #3bbec3;
  color: #fff;
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #3bbec3;
  transition: all 0.1s ease-in;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;

  :hover:not(:disabled) {
    background: #32a8ad;
    border: 1px solid #32a8ad;
  }

  :disabled {
    background: #32a8ad;
    border: 1px solid #32a8ad;
    cursor: progress;
  }

  :focus,
  :active,
  :hover {
    outline: none;
  }
`

export default ValidateButton
