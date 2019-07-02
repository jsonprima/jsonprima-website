import * as types from './types'

const update = code => ({
  type: types.UPDATE,
  payload: code,
})

export { update }
