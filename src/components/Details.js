import DateTimePicker from 'react-datetime-picker';
import React, { Component } from 'react';
import axios from 'axios';
import { SERVER_URL } from './constants';

import {
  Card,
  Button,
  Container,
  Row,
  Col,
  Form,
  Modal
} from 'react-bootstrap';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceId: this.props.match.params.serviceId,
      inCard: false,
      service: {},
      userId: this.props.user.id,
      appointment_date: new Date(),
      location: '',
      visible: false
    }
  }

componentDidMount() {
    this.fetchService()
  }
// get the details of the service
fetchService = () => {
  axios.get(`${SERVER_URL}/services/${this.state.serviceId}`, {withCredentials: true}).then(result => {
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


  axios.post(`${SERVER_URL}/appointments`, { appointment }, {withCredentials: true}).then((result) => {
    this.handleShow()
  })
}


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

onChange = appointment_date => this.setState({ appointment_date })


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
                <Card.Text>
                  {this.state.service.description}
                </Card.Text>

               <Form style={{'margin-bottom': '1.5rem'}}>
               <div>
                  <Form.Label>DATE & TIME</Form.Label>
                </div>
                  <DateTimePicker
                  calendarIcon={null}
                  name="appointment_date"
                  onChange={this.onChange}
                  value={this.state.appointment_date}
                  />
               </Form>

              <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>LOCATION</Form.Label>
                    <Form.Control as="textarea" rows="3" name="location" value={this.state.location}
                    onChange={this.handleChange} required/>
                 </Form.Group>
              </Form>

                <p>Just be aware that this is not an instant booking system, you will be contacted shortly for confirmation.
                </p>

              <Card.Footer className="text-muted">
                  <Button variant="btn btn-outline-info btn-md " onClick={this.handleClick}  >
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

          <Modal.Body>Thank you for submitting a booking request, you will be contacted shortly through email.
          </Modal.Body>

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
