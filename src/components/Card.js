import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';

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

    fetchAppointments = () => {
      // const SERVER_URL = `http://localhost:3001/appointments/user/${this.props.user.id}`;
      const SERVER_URL = `https://glam-b.herokuapp.com/appointments/user/${this.props.user.id}`;
      axios.get(SERVER_URL, {withCredentials: true}).then((results) => {
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
