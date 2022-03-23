// sync actions
// Action creator produces an action and this contains a javascript object
export const updateNewEventForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_EVENT_FORM",
        formData
    }
}