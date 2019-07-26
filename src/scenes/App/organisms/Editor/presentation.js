import React from 'react'
import CodeEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-json'
import ValidateButton from './atoms/ValidateButton'
import { Wrapper, EditorContainer, ValidateContainer } from './styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Presentation = ({
  code,
  update,
  validate,
  pendingValidation,
  response,
}) => (
  <Wrapper flexDirection="column" alignItems="center">
    <EditorContainer width={'75%'}>
      <ToastContainer
        position={toast.POSITION.TOP_CENTER}
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
        closeButton={false}
      />
      <CodeEditor
        placeholder="Type some code…"
        value={code}
        onValueChange={update}
        highlight={updatedCode =>
          highlight(updatedCode, languages.json)
            .split('\n')
            .map(
              line => `<span class="code_editor__line_number">${line}</span>`,
            )
            .join('\n')
        }
        padding={20}
        style={{
          fontFamily: '"Fira Mono", monospace',
          fontSize: 14,
          overflow: 'visible',
        }}
        className="code_editor"
      />
    </EditorContainer>
    <ValidateContainer width={'75%'}>
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
