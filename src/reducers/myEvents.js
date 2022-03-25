const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_EVENTS":
            return action.events 
        case "ADD_EVENT":
            return state.concat(action.event)
        case "UPDATE_EVENT":
            return state.map(event => event.id === action.event.id ? action.event : event)
        case "DELETE_EVENT":
            return state.filter(event => event.id === action.eventId ? false : event)
        case "CLEAR_EVENTS":
            return initialState
        default:
            return state
    }
}

// Populate array with objects.
// clear array with objects.
// or delete elements from that array
// possibly update a single element from that array