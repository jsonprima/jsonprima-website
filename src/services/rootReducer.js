/**
 * Redux root reducer.
 * Import all your Duck Reducers to this file.
 */

import { combineReducers } from 'redux'
import editor from '../scenes/App/organisms/Editor/duck'

export default () =>
  combineReducers({
    editor,
  })
