import React from 'react'
import EventCard from './EventCard.js'
import { connect } from 'react-redux'

const MyEvents = props => {
    const eventCards = props.events.length > 0 ? 
    props.events.map(e => <EventCard
    event={e} key={e.id}/>) : null
    return (
        eventCards
    )
}

const mapStateToProps = state => {
    return {
        events: state.myEvents 
    }
}

export default connect(mapStateToProps)(MyEvents)