import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      errors: ''
    };
  }

  componentWillMount() {
  return this.props.loggedInStatus ? this.redirect() : null
}

  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault()
    const {email, password} = this.state;
    let user = {
        email: email,
        password: password
  }

  // const SERVER_URL = 'http://localhost:3001/login';
  const SERVER_URL = 'https://glam-b.herokuapp.com/login';
  axios.post(SERVER_URL, {user}, {withCredentials: true})
      .then(response => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data)
          this.redirect()
        } else {
          this.setState({
            errors: response.data.errors
          })
        }
      })
      .catch(error => console.log('api errors:', error))
    };




  redirect = () => {
    if (this.props.match.params.serviceId) {
      (this.props.history.push(`/details/${this.props.match.params.serviceId}`))
    } else {
      this.props.history.push('/services')
    }
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    );
  };



  render() {
    const {name, email, password} = this.state;
    return(
      <div>
        <h1 className="mt-4">Log In</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group" controlId="formBasicEmail" className="w-50">
              <label for="exampleInputEmail1" className="mt-3">Email address</label>
              <input name="email" type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" value={ this.state.email } onChange={ this.handleChange } autoFocus required />
            </div>

            <div className="form-group" className="w-50">
              <label for="exampleInputPassword1" className="mt-3">Password</label>
              <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={ this.state.password } onChange={ this.handleChange } required />
            </div>

              <input type="submit" value="LOG IN" className="btn btn-primary btn-lg mb-3 mt-3" id="button"/>

            <div>
              Don't have an account? <Link to={this.props.match.params.serviceId ? `/signup/${this.props.match.params.serviceId}` : '/signup'}>SIGN UP</Link>
            </div>

          </form>

            <div>
              {
                this.state.errors ? this.handleErrors() : null
              }
            </div>

      </div>
    );
  }
}
