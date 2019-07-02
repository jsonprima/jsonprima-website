import { expect } from 'chai'

import update from '../reducers'
import * as types from '../types'

const initialState = `{
  "hello": "world"
}`

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(update(undefined, {})).to.equal(initialState)
  })

  it('should handle UPDATE', () => {
    expect(
      update(initialState, {
        type: types.UPDATE,
        payload: 'new',
      }),
    ).to.equal('new')
  })
})
