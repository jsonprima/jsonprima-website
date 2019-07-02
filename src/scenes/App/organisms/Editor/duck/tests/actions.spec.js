import { expect } from 'chai'

import * as types from '../types'
import * as actions from '../actions'

describe('actions', () => {
  it('should create an action to update the editor', () => {
    const expectedAction = {
      type: types.UPDATE,
      payload: 'init',
    }

    expect(actions.update('init')).to.eql(expectedAction)
  })
})
