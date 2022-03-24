import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"
import { withRouter } from 'react-router-dom'

// structuring props
const Logout = ({ logout, history }) => {
     // using props ({ logout }) as a callback below
  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        logout()
        history.push('/')
     }
    }>
        <input type="submit" value="Log Out"/>
        </form> 
    )
}

export default withRouter(connect(null, { logout } )(Logout))
