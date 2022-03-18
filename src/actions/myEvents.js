// synchronous actions
export const setMyEvents = events => {
    return {
        type: "SET_MY_EVENTS",
        events
    }
}



// async actions
export const getMyEvents = () => {
    return dispatch => {
            return fetch("http://localhost:3001/api/v1/events", {
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
                        console.log(response.data)
                      dispatch(setMyEvents(response.data))
                    }
                })   
                .catch(console.log)
        }
    }
