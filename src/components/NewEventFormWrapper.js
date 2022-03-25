import React from 'react'
import EventForm from './EventForm'
import { createEvent } from '../actions/myEvents'
import { connect } from 'react-redux'


const NewEventFormWrapper = ({ history, createEvent }) => {

const handleSubmit = (formData, userId) => {
    createEvent({
        ...formData,
        userId
    },  history)
}
    
    return <EventForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createEvent })(NewEventFormWrapper);