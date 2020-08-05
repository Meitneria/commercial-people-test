import { combineReducers } from 'redux'

import repos from './repos'
import library from './library'

export default combineReducers({
  repos,
  library,
})
