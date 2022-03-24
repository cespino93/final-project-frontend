import React from 'react';
// 1. we first grab the action creator below.
import { updateEventForm } from '../actions/eventForm'
import { connect } from 'react-redux'


// 3. This means redux gives us back a prop called updateEventForm which when invoked, actually Redux will now dispatch.
const EventForm = ({ formData, history, updateEventForm, userId, event, handleSubmit, editMode }) => {
  const { name, startDate, endDate } = formData
// functional componenet
  const handleChange = event => {
    const { name, value } = event.target
    // 4. This is not an invocation of just the action creator
    // its not Redux dispatching the action buil by the actions
    // creator with the appropriate arguments.
    updateEventForm(name, value)
    // store.dispatch.updateEventForm is actually whats happening on the line above
    // its giving it to Redux to dispatch it
  }

  return (
    <form onSubmit={event => {
      event.preventdefault()
      handleSubmit(event, formData, userId, history)
    }}>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={name}
      /><br/>
      <input
        placeholder="start date"
        name="startDate"
        onChange={handleChange}
        value={startDate}
      /><br/>
      <input
          placeholder="end date"
          name="endDate"
          onChange={handleChange}
          value={endDate}
      /><br/>
      <input
        type="submit"
        value={editMode ? "Update Event" : "Create Event"}
      />
    </form>
)};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.eventForm,
    userId
  }
}

//  2. we add the action creator to reduxs connect function, using either mapDispatchToProps or the shorthand object syntax seen below.
export default connect(mapStateToProps, { updateEventForm })(EventForm);
// we're using Thunk
