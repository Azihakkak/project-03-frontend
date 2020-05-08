import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import moment from 'moment';
import { SERVER_URL } from './constants';


export default class BookingList extends Component {
  constructor() {
    super();
    this.state = {
      appointments: []
    }
  }


componentDidMount() {
  this.fetchAppointments()
}

// Fetching data for all appointments
fetchAppointments = () => {
  axios.get(`${SERVER_URL}/appointments`, {withCredentials: true}).then((results) => {
    this.setState({
      appointments: results.data.new_app
    })
  });
}

  renderTableData = () => {
    return this.state.appointments.map((appointment) => {
      const {id, location, appointment_date} = appointment;
      return (
              <tr key={id}>
                <td>{appointment.user.name}</td>
                 <td>{appointment.user.email}</td>
                 <td>{appointment.service.title}</td>
                 <td>{ moment(appointment_date).format('MMMM Do YYYY, h:mm:ss a')}</td>
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
        <Table striped bordered hover variant="dark" responsive className="table">
          <thead>
            <tr style={{'textAlign': 'center'}}>
              <th>Client Name</th>
              <th>Client Email</th>
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
