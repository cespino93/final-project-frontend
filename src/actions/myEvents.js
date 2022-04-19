import { resetEventForm } from './eventForm'

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

export const deleteEventSuccess = eventId => {
    return {
        type: "DELETE_EVENT",
        eventId
    }
}

export const updateEventSuccess = event => {
    return { 
        type: "UPDATE_EVENT",
        event
    }
}

// async actions
export const getMyEvents = () => {
    return dispatch => {
            fetch("http://localhost:3001/api/v1/events", {
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
            dispatch(setMyEvents(response.data))
    }
})   
            .catch(console.log)
    }
}

export const createEvent = obj => {
    return dispatch => {
        const sendableEventData = {
            event: {
                start_date: obj.startDate,
                end_date: obj.endDate,
                name: obj.name,
                user_id: obj.userId
            }
        }
        fetch("http://localhost:3001/api/v1/events", {
        credentials: "include",
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableEventData)
    })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
            alert(resp.error)
          } else {
            dispatch(addEvent(resp.data))
            dispatch(resetEventForm())
            // history.push(`/events/${resp.data.id}`)
            }
        })
        .catch(console.log)
    }
}

export const updateEvent = (eventData, history) => {
    return dispatch => {
        const sendableEventData = {
                start_date: eventData.startDate,
                end_date: eventData.endDate,
                name: eventData.name, 
        }
        fetch(`http://localhost:3001/api/v1/events/${eventData.eventid}`, {
        credentials: "include",
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(sendableEventData)
    })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
             alert(resp.error)
          } else {
            dispatch(updateEventSuccess(resp.data))
            history.push(`/events/${resp.data.id}`)
            }
        })
        .catch(console.log)
    }
}

export const deleteEvent = (eventId, history) => {
    return dispatch => {
        fetch(`http://localhost:3001/api/v1/events/${eventId}`, {
        credentials: "include",
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(r => r.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
          } else {
            dispatch(deleteEventSuccess(eventId))
            history.push(`/events`)
            }
        })
        .catch(console.log)
}
}