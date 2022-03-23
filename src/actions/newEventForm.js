// sync actions

export const updateNewEventForm = (name, value) => {
    console.log(name, value)
    return {
        type: "UPDATE_NEW_EVENT_FORM",
        formData: { name, value }
    }
}