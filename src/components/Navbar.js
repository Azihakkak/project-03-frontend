import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from './constants';
import {
  Nav,
  Navbar,
  NavDropdown,
  Container
} from 'react-bootstrap';




export default class Navigation extends Component {


  handleClick = () => {
      axios.delete(`${SERVER_URL}/logout`, {withCredentials: true})
      .then(response => {
        this.props.handleLogout()
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
    }

  render() {
    return (
      <Navbar bg="light" expand="lg" className="sticky-top" style={{'margin': '0', 'padding': '0'}} >
      <Container style={{'background': '#67a8bd'}}>
        <Navbar.Brand href="/" className="logo">GlamB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
          </Nav>
          {
            this.props.loggedInStatus
            ? (
              <>
                <NavDropdown title={
                    <span className="dropdown-style ">{this.props.user.name}</span>
                } id="basic-nav-dropdown" >
                <NavDropdown.Item as={Link} to="/card">
                    My appointments
                </NavDropdown.Item>

                {this.props.user.admin
                ? (
                    <NavDropdown.Item  as={Link} to={`/bookings`}>
                        All bookings
                    </NavDropdown.Item>
                  )
                : null
              }

                <div className="dropdown-divider"></div>
                <NavDropdown.Item as={Link} to="/logout" onClick={this.handleClick}>
                    Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </>
            ) : (
              <>
              <Nav>
                <Nav.Link as={Link} to="/login">Log in</Nav.Link>
              </Nav>
              </>
            )
          }

        </Navbar.Collapse>
      </Container>
      </Navbar>
    );

  }
}
