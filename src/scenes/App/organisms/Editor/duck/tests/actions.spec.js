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

  it('should create an action to request a code validation', () => {
    const expectedAction = {
      type: types.REQUEST_VALIDATE,
      payload: 'code',
    }

    expect(actions.requestValidate('code')).to.eql(expectedAction)
  })

  it('should create an action to handle success validation request', () => {
    const expectedAction = {
      type: types.SUCCESS_VALIDATE,
      payload: 'response',
    }

    expect(actions.successValidate('response')).to.eql(expectedAction)
  })

  it('should create an action to handle failure validation request', () => {
    const expectedAction = {
      type: types.FAILURE_VALIDATE,
      payload: 'error',
    }

    expect(actions.failureValidate('error')).to.eql(expectedAction)
  })
})
