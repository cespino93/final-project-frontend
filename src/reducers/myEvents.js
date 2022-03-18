export default (state = [], action) => {
    switch (action.type) {
        case "SET_MY_EVENTS":
        return action.events 
        default:
            return state
    }
}