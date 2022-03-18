import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/users.js'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myEvents from './reducers/myEvents.js'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    users: usersReducer,
    currentUser,
    loginForm,
    myEvents
})
  
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
   
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
