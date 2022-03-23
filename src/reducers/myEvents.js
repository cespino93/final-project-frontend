const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_MY_EVENTS":
            return action.events 
        default:
            return state
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