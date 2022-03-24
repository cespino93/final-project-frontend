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
import EventForm from './components/EventForm.js'
import EventCard from './components/EventCard.js'
import MainContainer from './components/MainContainer.js'
import NewTripFormWrapper from './components/NewTripFormWrapper.js'
import EditEventFormWrapper from './components/EditEventFormWrapper.js'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import { setFormDataForEdit } from './actions/eventForm'


// we need BrowserRouter to wrap our App and other code in

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn, events, setFormDataForEdit } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/events' component={MyEvents}/>
          <Route exact path='/events/new' component={NewTripFormWrapper}/>
          <Route exact path='/events/:id' render={props => {
            const event = events.find(event => event.id === props.match.params.id)
              // Matching the event to the id
            return <EventCard event={event} {...props}/>
          }
        }/>
        <Route exact path='/events/:id/edit' render={props => {
            const event = events.find(event => event.id === props.match.params.id)
              // Matching the event to the id
            return <EditEventFormWrapper event={event} {...props}/>
          }
        }/>
        </Switch>
      </div> 
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    events: state.myEvents
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser, setFormDataForEdit })(App));
