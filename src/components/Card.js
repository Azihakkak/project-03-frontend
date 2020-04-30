import React, { Component } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';
import moment from 'moment';


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
            <tr style={{'text-align': 'center'}}>
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
