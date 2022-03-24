import React from 'react'
import EventForm from './EventForm'
import { updateEvent } from '../actions/myEvents'
import { setFormDataForEdit } from '../actions/myEvents'
import { connect } from 'react-redux'

class EditEventFormWrapper extends React.Component {
    componentDidMount() {
        this.props.event && this.props.setFormDataForEdit(this.props.event)
    }
// ({ history, updateEvent })
    handleSubmit = (event, formData, userId, history) => {
        const { updateEvent, event } = this.props
        event.preventDefault()
        updateEvent({
          ...formData,
          eventId: event.id,
          userId
    },    history)
    }
    
    render() {
        const { history, handleSubmit } = this.props
        return <EventForm editMode history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { updateEvent, setFormDataForEdit })(EditEventFormWrapper);