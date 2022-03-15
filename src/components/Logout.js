import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"

// structuring props
const Logout = ({ logout }) => {
     // using props ({ logout }) as a callback below
    return (
        <form onSubmit={logout}>

            <input type="submit" value="Log Out"/>
        </form> 
    )
}

export default connect(null, { logout } )(Logout)
// using { logout } as a dispatch to props object


