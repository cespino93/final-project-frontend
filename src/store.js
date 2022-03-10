import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import thunk from 'redux-thunk';


const reducer = combineReducers({
    users: usersReducer
})
  
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
   
export const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))
  
