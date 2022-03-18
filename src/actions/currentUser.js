import { resetLoginForm } from "./loginForm.js"
import { getMyEvents } from "./myEvents.js"



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

// a synchronous action creators
export const login = credentials => {
    console.log("credentials are", credentials)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
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
                }
            })   
            .catch(console.log)
    }
}

// this asynchronous action creator is used to clear out my function
export const logout  = () => {
    // we're returning a function from an asynchronous action creator using thunk and (dispatch) as an arguement - function is an action creator
    return dispatch  => {
        dispatch(clearCurrentUser())
        // logging out clears the frontend by clearCurrentUser
        return fetch('http://localhost:3001/api/v1/logout', {
            // options and method to destroy it - credentials include sends cookies back
            credentials: "include",
            method: "DELETE"
        // this set of code 51- 54 tells the backend to clear the session
        })
    }

}


export const getCurrentUser = () => {
    console.log("DIPATCHING GET CURRENT USER")
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
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
                }
            })   
            .catch(console.log)
    }
}

