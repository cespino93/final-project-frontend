import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to="/events" >My Events</NavLink>
            <NavLink exact activeClassName="active" to="/events/new" >New Event</NavLink>
            { loggedIn ? <Logout/> : null}
        </div>
    )
}

const mapStateToProps = ({ currentUser }) => {
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)


