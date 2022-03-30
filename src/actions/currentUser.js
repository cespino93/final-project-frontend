import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getMyEvents, clearEvents } from "./myEvents.js"


// synchronous action creators  
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// getting rid of current user thats sitting in redux store
export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

// a synchronous action creators using thunk to dispatch
export const login = (credentials, history) => {
    return dispatch => {
            fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
             "Content-Type": "application/json" 
            },
            body: JSON.stringify(credentials)
        })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    dispatch(getMyEvents())
                    dispatch(resetLoginForm())
                    history.push('/')
                }
            })   
            .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
            fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify(userInfo)
        })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    dispatch(getMyEvents())
                    dispatch(resetSignupForm())
                    history.push('/')
                }
            })   
            .catch(console.log)
    }
}

// this asynchronous action creator is used to clear out my function
export const logout  = (event) => { 
    // we're returning a function from an asynchronous action creator using thunk and (dispatch) as an arguement - function is an action creator
    return dispatch  => {
        dispatch(clearCurrentUser())
        // logging out clears the frontend by clearCurrentUser
        dispatch(clearEvents())
        return fetch('http://localhost:3001/api/v1/logout', {
            // options and method to destroy it - credentials include sends cookies back
            credentials: "include",
            method: "DELETE"
        // this set of code 51- 54 tells the backend to clear the session
        })
    }
}


export const getCurrentUser = () => {
    return dispatch => {
            fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json" 
            },
        })
            .then(r => r.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setCurrentUser(response.data))
                    dispatch(getMyEvents())
                }
            })   
            .catch(console.log)
    }
}

