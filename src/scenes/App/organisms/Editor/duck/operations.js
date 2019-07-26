import axios from 'axios'
import { toast } from 'react-toastify'
import * as actions from './actions'

const { update } = actions

const validate = code => dispatch => {
  dispatch(actions.requestValidate(code))

  return axios
    .post('https://jsonprima-api.herokuapp.com/api', {
      code,
    })
    .then(response => {
      dispatch(actions.successValidate(response.data))

      /**
       * If response is an empty array, then JSON is valid.
       */
      if (response.data.length === 0) {
        toast.success('🦄 JSON is valid !')
      } else {
        toast.error('💣 Invalid JSON !')
      }
    })
    .catch(error => {
      dispatch(
        actions.failureValidate({
          message: error.message,
          name: error.name,
        }),
      )

      /**
       * Error due to API call. This mostly occurs during network fail.
       */
      toast.error('🖧 Network Error')
    })
}

export { update, validate }
