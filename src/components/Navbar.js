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
      axios.delete('http://localhost:3001/logout', {withCredentials: true})
      .then(response => {
        this.props.handleLogout()
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
    }

  render() {
    return (
      <Navbar bg="light" expand="lg" classNmae="sticky-top">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
          </Nav>
          {
            this.props.loggedInStatus
            ? (
              <>
                <NavDropdown title={
                    <span className="dropdown-style">Azi</span>
                } id="basic-nav-dropdown" >

                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/card">
                    My Card
                  </Nav.Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link as={Link} to="/logout" onClick={this.handleClick}>
                    Log Out
                  </Nav.Link>
                </NavDropdown.Item>
                </NavDropdown>
            </>
            ) : (
              <>
                <Link to="/login">
                  <Button className="mr-3" variant="outline-dark">Log In</Button>
                </Link>
              </>
            )
          }

        </Navbar.Collapse>
        </Container>
      </Navbar>
    );

  }
}
