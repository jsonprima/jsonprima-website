import axios from 'axios'
import * as actions from './actions'

const { update } = actions

const validate = code => dispatch => {
  dispatch(actions.requestValidate(code))

  return axios
    .post('https://jsonprima-api.herokuapp.com/api', {
      code,
    })
    .then(response => dispatch(actions.successValidate(response.data)))
    .catch(error =>
      dispatch(
        actions.failureValidate({
          message: error.message,
          name: error.name,
        }),
      ),
    )
}

export { update, validate }
