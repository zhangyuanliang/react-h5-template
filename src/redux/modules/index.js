import {
  combineReducers
} from 'redux'
import commonReducer from './common'

//合并成根reducer
const rootReducer = combineReducers({
  commonReducer
})

export default rootReducer
