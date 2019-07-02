import { UPDATE } from './types'

const initial = `{
  "hello": "world"
}`

const update = (state = initial, action) => {
  switch (action.type) {
    case UPDATE:
      return action.payload
    default:
      return state
  }
}

export default update
