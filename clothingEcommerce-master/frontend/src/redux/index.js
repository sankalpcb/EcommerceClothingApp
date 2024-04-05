import { mainReducer } from './reducers/mainReducer'

import { thunk } from 'redux-thunk'
import {createStore,combineReducers, applyMiddleware} from 'redux'
import { thunkReducer } from './thunkReducers/thunkReducer'
const rootReducer = combineReducers({
    main: mainReducer,
    thunky:thunkReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store