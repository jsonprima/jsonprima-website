import React from 'react'
import CodeEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-json'
import ValidateButton from './atoms/ValidateButton'
import { Wrapper, EditorContainer, ValidateContainer } from './styles'

const Presentation = ({
  code,
  update,
  validate,
  pendingValidation,
  response,
}) => (
  <Wrapper flexDirection="column" alignItems="center">
    <EditorContainer width={1 / 2}>
      <CodeEditor
        placeholder="Type some code…"
        value={code}
        onValueChange={update}
        highlight={updatedCode => highlight(updatedCode, languages.json)}
        padding={20}
        style={{
          fontFamily: '"Fira Mono", monospace',
          fontSize: 14,
          background: '#fafafa',
        }}
      />
    </EditorContainer>
    <ValidateContainer width={1 / 2}>
      <ValidateButton
        disabled={pendingValidation ? true : false}
        onClick={() => validate(code)}
      >
        {pendingValidation ? 'Validating...' : 'Validate JSON'}
      </ValidateButton>
    </ValidateContainer>
    <div>{JSON.stringify(response)}</div>
  </Wrapper>
)

export default Presentation
