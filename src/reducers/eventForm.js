const initialState = {
  name: "",
  startDate: "",
  endDate: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
      case "UPDATE_NEW_EVENT_FORM":
        const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
        return returnVal
      default:
        return state
    }
}
