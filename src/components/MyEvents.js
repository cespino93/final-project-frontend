import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyEvents = props => {
    const eventCards = props.events.length > 0 ? 
    props.events.map(e => (<p key={e.id}><Link to={`/events/${e.id}`}>{e.attributes.name}</Link></p>)) :
    null
    return eventCards
}

const mapStateToProps = state => {
    return {
    events: state.myEvents 
    }
}

export default connect(mapStateToProps)(MyEvents)