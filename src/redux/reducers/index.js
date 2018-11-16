import { combineReducers } from 'redux'
import getDogReducer from './getDogReducer'

const rootReducer = combineReducers({
    getDogReducer,
})

export default rootReducer