import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import MyEvents from './components/MyEvents.js'
import MainContainer from './components/MainContainer.js'
import { Route } from 'react-router-dom'

// we need BrowserRouter to wrap our App and other code in

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/my-events' component={MyEvents}/>
          </div> 
    );
  }
}

export default connect(null, { getCurrentUser })(App);
