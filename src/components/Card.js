import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import { SERVER_URL } from './constants';


export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      appointments: [],
      services: []
    }
  }



componentDidMount() {
  this.fetchAppointments()
}
// Fetch appointments of the user
fetchAppointments = () => {
  axios.get(`${SERVER_URL}/appointments/user/${this.props.user.id}`, {withCredentials: true}).then((results) => {
    this.setState({
      services: results.data.new_user_app
    });
  })
}

renderTableData = () => {
  return this.state.services.map((service) => {
    const {id, location, appointment_date} = service;
    return (
            <tr key={id}>
              <td>{service.service.title}</td>
               <td>{moment(appointment_date).format('MMMM Do YYYY, h:mm:ss a') }</td>
               <td>{location}</td>
            </tr>
     );
  })
}

  render() {
    return(
      <div>
        <h1 className="card-title-main">Welcome {this.props.user.name}</h1>
        <hr id="welcome" />
        <Table striped bordered hover variant="dark" className="table">
          <thead>
            <tr style={{'textAlign': 'center'}}>
              <th>Service</th>
              <th>Date & Time</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </Table>
      </div>
    );
  }
}
