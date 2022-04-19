import React from 'react'
import EventForm from './EventForm'
import { updateEvent, deleteEvent } from '../actions/myEvents'
import { setFormDataForEdit, resetEventForm } from '../actions/eventForm'
import { connect } from 'react-redux'

class EditEventFormWrapper extends React.Component {
    componentDidMount() {
        this.props.event && this.props.setFormDataForEdit(this.props.event)
    }
    componentDidUpdate(prevProps) {
        this.props.event && !prevProps.event &&
        this.props.setFormDataForEdit(this.props.event)
    }

    componentWillUnmount() {
        this.props.resetEventForm()

    }

    handleSubmit = (formData) => {
        const { updateEvent, event, history } = this.props
        updateEvent({
          ...formData,
          eventId: event.id
    },    history)
}
    
    render() {
        const { history, deleteEvent, event } = this.props
        const eventId = event ? event.id : null
        return <>
                <EventForm editMode handleSubmit={this.handleSubmit} />
                <br/>
                <button style={{color: "red"}} onClick={()=>deleteEvent(eventId, history)}>Delete Event</button>
               </>
    }
};

export default connect(null, { updateEvent, setFormDataForEdit, resetEventForm, deleteEvent })(EditEventFormWrapper);