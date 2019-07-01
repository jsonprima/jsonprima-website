import React from 'react'
import CodeEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-json'
import ValidateButton from './atoms/ValidateButton'
import { Wrapper, EditorContainer, ValidateContainer } from './styles'

const initial = `{
  "hello": "world"
}`

class Editor extends React.Component {
  state = { code: initial }

  render() {
    return (
      <Wrapper flexDirection="column" alignItems="center">
        <EditorContainer width={1 / 2}>
          <CodeEditor
            placeholder="Type some code…"
            value={this.state.code}
            onValueChange={code => this.setState({ code })}
            highlight={code => highlight(code, languages.json)}
            padding={20}
            style={{
              fontFamily: '"Fira Mono", monospace',
              fontSize: 14,
              background: '#fafafa',
            }}
          />
        </EditorContainer>
        <ValidateContainer width={1 / 2}>
          <ValidateButton>Validate JSON</ValidateButton>
        </ValidateContainer>
      </Wrapper>
    )
  }
}

export default Editor