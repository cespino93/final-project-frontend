import React from 'react'
import { connect } from 'react-redux'


const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar">
            { currentUser ? <strong>Welcome, {currentUser.attributes.name} from {currentUser.attributes.hometown.city}</strong> : "" }
        </div>
    )
}

// I can do this because i know the incoming argument is an incoming object, state, coming from redux 
// and i know it has a propertycalled currentUser
// state = { ...,
          // currentUser: (...)
          // }
const mapStateToProps = ({ currentUser }) => {
// return has a key of current User
    return {
        currentUser
    }
}
           

export default connect(mapStateToProps)(NavBar)
// using { logout } as a dispatch to props object


