const initialState = {
    name: "",
    username: "",
    password: "",
    hometown: {
        city: "",
        state: "",
        country: "",
    }
}

export default (state=initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}
