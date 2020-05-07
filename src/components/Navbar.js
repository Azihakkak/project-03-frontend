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
      <Navbar bg="light" expand="lg" className="sticky-top">
      <Container>
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
                <NavDropdown.Item className="user-nav">
                  <Nav.Link as={Link} to="/card" className="user-nav">
                    My appointments
                  </Nav.Link>
                </NavDropdown.Item>

                {this.props.user.admin
                ? (
                    <NavDropdown.Item className="user-nav ">
                      <Nav.Link as={Link} to={`/bookings`} className="user-nav">
                        All bookings
                      </Nav.Link>
                    </NavDropdown.Item>
                  )
                : null
              }

                <div class="dropdown-divider"></div>
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/logout" onClick={this.handleClick} className="user-nav" >
                    Log Out
                  </Nav.Link>
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
