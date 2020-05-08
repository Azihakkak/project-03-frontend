import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from './constants';


export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }

handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };

handleSubmit = (event) => {
  event.preventDefault()
  const {name, email, password, password_confirmation} = this.state;

  let user = {
    name: name,
    email: email,
    password: password,
    password_confirmation: password_confirmation
  }

    axios.post(`${SERVER_URL}/users`, {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
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
  }


render() {
  const { name, email, password, password_confirmation } = this.state;

  return (
        <div>
          <h1 className="mt-4">Sign Up</h1>

          <form onSubmit={this.handleSubmit}>
            <div className="form-group" controlid="formBasicEmail" className="w-50">
              <label className="mt-3">Name</label>
              <input name="name" type="text" className="form-control" id="exampleInputEmail1" placeholder="name" value={name} onChange={ this.handleChange } autoFocus required />
            </div>

            <div className="form-group" className="w-50">
              <label className="mt-3">Email</label>
              <input name="email" type="text" className="form-control" id="exampleInputemail1" placeholder="email" value={ email } onChange={ this.handleChange } required />
            </div>

            <div className="form-group" className="w-50">
              <label className="mt-3">Password</label>
              <input name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="password" value={ password } onChange={ this.handleChange } required />
            </div>

            <div className="form-group" className="w-50">
              <label className="mt-3">Confirm Password</label>
              <input name="password_confirmation" type="password" className="form-control" id="exampleInputPassword1" placeholder="password confirmation" value={ password_confirmation } onChange={ this.handleChange } required />
            </div>

              <input type="submit" value="SIGN UP" className="btn btn-primary btn-lg mb-3 mt-3" id="button"/>

            <div>
              Already have an account? <Link to='/login'>LOG IN</Link>
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
