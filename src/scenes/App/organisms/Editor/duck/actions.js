import * as types from './types'

const update = code => ({
  type: types.UPDATE,
  payload: code,
})

const requestValidate = code => ({
  type: types.REQUEST_VALIDATE,
  payload: code,
})

const successValidate = response => ({
  type: types.SUCCESS_VALIDATE,
  payload: response,
})

const failureValidate = error => ({
  type: types.FAILURE_VALIDATE,
  payload: error,
})

export { update, requestValidate, successValidate, failureValidate }
