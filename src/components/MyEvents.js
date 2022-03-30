import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getMyEvents } from '../actions/myEvents';


class MyEvents extends React.Component {

    componentDidMount() {
      this.props.fetchEvents()
    }
    

    render() {
        console.log(this.props.events)
    const eventCards = this.props.events.length > 0 ? this.props.events.map(e => (<p key={e.id}><Link to={`/events/${e.id}`}>{e.attributes.name}</Link></p>)) : null
    return eventCards
    }
}


const mapStateToProps = state => {
    return {
    events: state.myEvents 
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchEvents: () => dispatch(getMyEvents)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyEvents)