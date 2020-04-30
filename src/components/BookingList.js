import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import moment from 'moment';


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
  // const SERVER_URL = `http://localhost:3001/appointments`;
  const SERVER_URL = `https://glam-b.herokuapp.com/appointments`;
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
            <tr style={{'text-align': 'center'}}>
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
