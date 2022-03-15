import React from 'react';
import './App.css';
import Login from "./components/Login.js"
import Logout from "./components/Logout.js"
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"

class App extends React.Component {
  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      // think about refactoring this to a nav bar
      this.props.currentUser ? <Logout/> : <Login/>
    );
  }
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

export default connect(mapStateToProps, { getCurrentUser })(App);
