import React, { Component } from 'react';
import LandingPage from './LandingPage';
import ServiceList from './ServiceList';
import Service from './Service';
import Details from './Details';
import Card from './Card';
import BookingList from './BookingList';
import Navbar from './Navbar';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Permission from './Permission';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
      user: {admin: true, email: "azi@gmail.com", id: 39, name: "Azi"}
    }
  }

  componentDidMount() {
    // fix this later with aleks
    // this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in',
   {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    return (
      <div className="container">
        <Route render={props => (<Navbar {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} user={this.state.user} />)} />
          <Switch>
            <Route exact path='/' component={ LandingPage } />

            <Route exact path='/services' component={ ServiceList } />
            <Route exact path='/details/:serviceId' render={props => (<Details {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user} />)} />
            <Route path='/card' render={props => (<Card {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} user={this.state.user} />)} />
            <Route path='/bookings' render={props => (<BookingList {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} user={this.state.user} />)} />
            <Route path='/signup' component={ SignUp } />
            <Route exact path="/login/:serviceId?" render={props => (<LogIn {...props}  handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} />)} />
          </Switch>

      </div>
    );
  }
}

export default App;
