import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'


// functional component
const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to="/events" >My Events</NavLink>
            <NavLink exact activeClassName="active" to="/events/new" >New Event</NavLink>
            { loggedIn ? <Logout/> : null}
        </div>
    )
}

// I can do this because i know the incoming argument is an incoming object, state, coming from redux 
// and i know it has a propertycalled currentUser
// state = { ...,
          // currentUser: (...)
          // }


// this is how we copnnect to our redux store  using state along with the { connect } import 
const mapStateToProps = ({ currentUser }) => {
// return has a key of current User
    return {
        currentUser,
        loggedIn: !!currentUser
    }
}

export default connect(mapStateToProps)(NavBar)
// using { logout } as a dispatch to props object


