import * as actions from './actions'

const { update } = actions

const validate = code => dispatch => {
  dispatch(actions.requestValidate(code))

  return fetch('https://jsonprima-api.herokuapp.com/api/' + code, {
    method: 'post',
  })
    .then(res => res.json())
    .then(response => dispatch(actions.successValidate(response)))
    .catch(error => dispatch(actions.failureValidate(error)))
}

export { update, validate }
