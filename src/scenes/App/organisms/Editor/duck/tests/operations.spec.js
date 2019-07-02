import { expect } from 'chai'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'

import * as types from '../types'
import * as operations from '../operations'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('operations', () => {
  it('should update editor', () => {
    const initialState = {
      editor: 'init',
    }

    const store = mockStore(initialState)

    store.dispatch(operations.update('update'))

    const expectedAction = {
      type: types.UPDATE,
      payload: 'update',
    }

    expect(store.getActions()).to.eql([expectedAction])
  })
})
