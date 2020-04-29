import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';


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

fetchAppointments = () => {
  const SERVER_URL = `http://localhost:3001/appointments`;
  axios.get(SERVER_URL, {withCredentials: true}).then((results) => {
    console.log(results.data.new_app);
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
                 <td>{appointment_date}</td>
                 <td>{location}</td>

              </tr>


           );
    })
  }


  render() {
    return(
      <div>
        <h3>Welcome {this.props.user.name}</h3>

        <Table striped bordered hover>
          <thead>
            <tr>
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
