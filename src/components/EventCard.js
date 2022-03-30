import React from 'react'
import { Link } from 'react-router-dom'

const EventCard = ({ event }) => {
    return (
        event ?
        <div>
            <h3>{event.attributes.name}</h3>
            <p>{event.attributes.start_date}</p>
            <p>{event.attributes.end_date}</p>
            <Link to={`/events/${event.id}/edit`}>Edit this event</Link>
        </div> :
            <p>This is the Event card with no event!</p>
    )
}

export default EventCard