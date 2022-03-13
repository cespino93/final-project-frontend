// synchronous action creators  
export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

// asynchronous action creators
export const login = credentials => {
    return dispact => {
        return fetch("http://localhost:3001/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
            },
            body: JSON.stringify({username: "cespino", password: "password"})
        })
    }
}