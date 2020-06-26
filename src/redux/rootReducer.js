import { combineReducers } from 'redux'
import { code, account } from '~/redux/account/reducer'

export default combineReducers({
  code,
  account
})
