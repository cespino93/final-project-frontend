import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBarContainer from './components/NavBarContainer.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import EventContainer from './components/EventContainer.js'
import EventCard from './components/EventCard.js'
import EventForm from './components/EventForm';
import EditEventFormWrapper from './components/EditEventFormWrapper.js'
import { Route, Switch, withRouter } from 'react-router-dom'

  
class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, events } = this.props
    return (
      <div className="App">
        { loggedIn ? <NavBarContainer location={this.props.location}/> : <Home/> }
        <Switch>
          <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/events' component={EventContainer}/>
          <Route exact path='/events/new' component={EventForm}/>
          <Route exact path='/events/:id' render={props => {
            const event = events.find(event => event.id === props.match.params.id)
              // Matching the event to the id
            console.log(event)
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

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
