import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  ModelFooter
} from 'react-bootstrap';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceId: this.props.match.params.serviceId,
      inCard: false,
      service: {},
      userId: this.props.user.id,
      appointment_date: {},
      location: '',
      visible: false
    }
  }

  componentDidMount() {
      this.fetchService()
    }

  fetchService = () => {
    const SERVER_URL = `http://localhost:3001/services/${this.state.serviceId}`;
    axios.get(SERVER_URL, {withCredentials: true}).then(result => {
      this.setState({service: result.data.service});
    })
  }

handleChange = (event) => {
  const {name, value} = event.target
  this.setState({
    [name]: value
  })
}


dateSelected = (event, inst) => {
    this.setState({
        appointment_date: inst.getVal()
    });
}

onSetMoment = (event, inst) => {
        this.setState({
          appointment_date: inst.getVal()});
    };


handleClick = () => {
  const {appointment_date, location, userId, serviceId} = this.state;

  const appointment = {
    appointment_date: appointment_date,
    location: location,
    user_id: userId,
    service_id: serviceId
  };

  const SERVER_URL = 'http://localhost:3001/appointments';
  axios.post(SERVER_URL, { appointment }, {withCredentials: true}).then((result) => {
    // console.log("submitted");
    this.handleShow()
  })

}

// toggleModal = () => {
//   this.setState({
//     visible: this.state.visible
//   })
// }

handleClose = () => {
  this.setState({visible: false});
  this.redirect()
}
handleShow = () => {
  this.setState({visible: true});
}

redirect = () => {
  this.props.history.push(`/services`);
}

  render() {
    return(

      <Container className="mt-5">
        <Row className="justify-content-center text-center">
          <Col className="col-xs-12 col-sm-12 col-md-8 col-lg-6">
            <Card>

              <Card.Body className='align-items-center shadow explore-card'>
              <Card.Img variant="top" src="images/nice-pic.jpg"/>
                <Card.Title>{this.state.service.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                ${this.state.service.cost}
                </Card.Subtitle>
                <Card.Text>{this.state.service.description}
                </Card.Text>

                <mobiscroll.Form>
                   <mobiscroll.FormGroup>
                       <mobiscroll.FormGroupTitle>
                       PICK YOUR PREFERRED DATE & TIME
                       </mobiscroll.FormGroupTitle>

                       <mobiscroll.Datetime steps={{minute: 15}} dateWheels="|D M d|" alue={this.state.appointment_date} onSet={this.onSetMoment}
                       theme= 'ios'
                       themeVariant= 'light'>
                          <mobiscroll.Input placeholder="Please Select..."></mobiscroll.Input>
                       </mobiscroll.Datetime>
                  </mobiscroll.FormGroup>
               </mobiscroll.Form>

              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>LOCATION</Form.Label>
                    <Form.Control as="textarea" rows="3" name="location" value={this.state.location} onChange={this.handleChange} required/>
                 </Form.Group>
              </Form>

              <Link to='/services'>
                <Button variant="btn btn-outline-secondary" className="mb-3 mt-3">
                  Keep Browsing
                </Button>
              </Link>
              <p>Just be aware that this is not an instant booking system, you will be contacted shortly for confirmation.</p>
              <Card.Footer className="text-muted">
                  <Button variant="btn btn-light " onClick={this.handleClick}  >
                    REQUEST A BOOKING
                  </Button>
              </Card.Footer>

              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Modal show={this.state.visible} onHide={this.handleClose}>
          <Modal.Header closeButton >
          <Modal.Title>Thank you {this.props.user.name}</Modal.Title>

          </Modal.Header>
          <Modal.Body>Thank you for submitting a request, you will be contacted shortly through email.</Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>

      </Container>

    );
  }
}
