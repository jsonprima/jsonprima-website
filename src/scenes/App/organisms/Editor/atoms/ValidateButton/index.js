import styled from 'styled-components'

const ValidateButton = styled.button`
  border: 0;
  background: 0;
  color: #4f4f4f;
  display: inline-block;
  padding: 12px 24px;
  border: 1px solid #4f4f4f;
  transition: all 0.1s ease-in;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  width: 100%;

  :hover:not(:disabled) {
    color: #fff;
    background: #3bbec3;
    border: 1px solid #3bbec3;
  }

  :disabled {
    background: #efefef;
    border: 1px solid #efefef;
    cursor: progress;
  }

  :focus,
  :active,
  :hover {
    outline: none;
  }
`

export default ValidateButton
