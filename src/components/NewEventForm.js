import React from 'react';
import { updateNewEventForm } from '../actions/newEventForm';
import { connect } from 'react-redux'

const NewEventForm = ({name, startDate, endDate, history}) => {

  const handleChange = event => {
    const { name, value } = event.target
    updateNewEventForm(name, value)
  }

  const handleSubmit = event => event.default()

  return (
    <form onSubmit={handleSubmit}>
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
        value="Create Event"
      />
    </form>
)};

const mapStateToProps = state => {
  const { startDate, endDate, name } = state.newEventForm
  return {
    startDate,
    endDate,
    name
  }
}
export default connect(mapStateToProps, { updateNewEventForm })(NewEventForm);

 