import React ,{ Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  Button,
  FormControl,
  Container
} from 'react-bootstrap';



export default class Navigation extends Component {


  handleClick = () => {
    // const SERVER_URL = 'http://localhost:3001/logout';
    const SERVER_URL = 'https://glam-b.herokuapp.com/logout';
      axios.delete(SERVER_URL, {withCredentials: true})
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
                    <span className="dropdown-style">{this.props.user.name}</span>
                } id="basic-nav-dropdown"  >

                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/card">
                    My Card
                  </Nav.Link>
                </NavDropdown.Item>
                {this.props.user.admin
                ? (
                    <NavDropdown.Item>
                      <Nav.Link as={Link} to={`/bookings`}>
                        BOOKINGS
                      </Nav.Link>
                    </NavDropdown.Item>
                  )
                : (
                  console.log('admin false')
                )
              }


                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/logout" onClick={this.handleClick}>
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
