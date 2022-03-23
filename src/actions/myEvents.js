// synchronous actions
export const setMyEvents = events => {
    return {
        type: "SET_MY_EVENTS",
        events
    }
}

export const clearEvents = () => {
    return {
        type: "CLEAR_EVENTS"
    }
}

export const addEvent = event => {
    return {
        type: "ADD_EVENT",
        event
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

export const createEvent = eventData => {
    return dispatch => {
        const sendableEventdata = {
            event: {
                start_date: eventData.startDate,
                end_date: eventData.endDate,
                name: eventData.name,
                user_id: eventData.userId
            }
        }
    return fetch("http://localhost:3001/api/v1 events", {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableEventData)
    })
        .then(r => r.json())
        .then(console.log)
    }
}