// sync actions
// Action creator produces an action and this contains a javascript object
export const updateEventForm = (name, value) => {
    const formData = { name, value }
    return {
        type: "UPDATE_NEW_EVENT_FORM",
        formData
    }
}

export const resetEventForm = () => {
    return {
        type: "RESET_NEW_EVENT_FORM",
    }
}

export const setFormDataForEdit = event => {
    const eventFormData = {
        name: event.attributes.name,
        startDate: event.attributes.start_date,
        endDate: event.attributes.end_date,
    }
    return {
        type: "SET_FORM_DATA_FOR_EDIT",
        eventFormData
    }
}