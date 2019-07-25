import styled from 'styled-components'
import { Flex, Box } from '@rebass/grid'

export const EditorContainer = styled(Box)`
  .code_editor {
    font-size: 12px;
    font-variant-ligatures: common-ligatures;
    border: 1px solid #efefef;
    counter-reset: line;
  }

  .code_editor__line_number:before {
    position: absolute;
    right: 100%;
    margin-right: 10px;
    text-align: right;
    color: #3bbec3;
    user-select: none;
    counter-increment: line;
    content: counter(line);
  }

  .code_editor > pre,
  .code_editor > textarea {
    line-height: 1.5 !important;
  }
`

export const ValidateContainer = styled(Box)``

export const Wrapper = styled(Flex)`
  margin: 1.67em 0;

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #90a4ae;
  }
  .token.punctuation {
    color: #9e9e9e;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #e91e63;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #4caf50;
  }
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #795548;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #3f51b5;
  }
  .token.function {
    color: #f44336;
  }
  .token.regex,
  .token.important,
  .token.variable {
    color: #ff9800;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
`
