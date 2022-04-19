import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createEvent } from '../actions/myEvents';


  const EventForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      startDate: '',
      endDate: ''
    })
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const handleChange = e => {
      setFormData(pS => ({
        ...pS,
        [e.target.name]: e.target.value
      }))
    }
    const handleSubmit = e => {
      e.preventDefault();
      dispatch(createEvent({...formData, userId: user.id}));
    }

    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          name="name"
          onChange={handleChange}
          value={formData.name}
        /><br/>
        <input
          placeholder="start date"
          name="startDate"
          onChange={handleChange}
          value={formData.startDate}
        /><br/>
        <input
            placeholder="end date"
            name="endDate"
            onChange={handleChange}
            value={formData.endDate}
        /><br/>
        <input
          type="submit"
        />
      </form>
  )
}

export default EventForm;