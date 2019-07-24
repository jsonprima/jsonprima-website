import {
  UPDATE,
  REQUEST_VALIDATE,
  SUCCESS_VALIDATE,
  FAILURE_VALIDATE,
} from './types'

const initial = {
  code: '{\n  "hello": "world"\n}',
  validate: {
    pending: false,
    response: null,
    error: null,
  },
}

const update = (state = initial, action) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, code: action.payload }
    case REQUEST_VALIDATE:
      return {
        ...state,
        validate: { pending: true, response: null, error: null },
      }
    case SUCCESS_VALIDATE:
      return {
        ...state,
        validate: { pending: false, response: action.payload, error: null },
      }
    case FAILURE_VALIDATE:
      return {
        ...state,
        validate: { pending: false, response: null, error: action.payload },
      }
    default:
      return state
  }
}

export default update
