import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import MyEvents from './components/MyEvents.js'
import MainContainer from './components/MainContainer.js'
import { Route, Switch, withRouter } from 'react-router-dom'

// we need BrowserRouter to wrap our App and other code in

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
      <div className="App">
          { loggedIn ? <Logout/> : null}
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/' render={(props)=> loggedIn ? <MyEvents {...props}/> : <Home {...props}/>}/>
          <Route exact path='/my-events' component={MyEvents}/>
      </div> 
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
