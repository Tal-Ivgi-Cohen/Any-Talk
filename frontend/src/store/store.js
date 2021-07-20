import { createStore, applyMiddleware,combineReducers, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { userReducer } from './reducers/userReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

 const rootReducer = combineReducers({
  userModule: userReducer
})

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(ReduxThunk))) //Passing the reducer
