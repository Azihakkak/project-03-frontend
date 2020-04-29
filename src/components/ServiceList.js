import React, { Component } from 'react';
import Service from './Service';
import Title from './Title';
import axios from 'axios';

export default class ServiceList extends Component {
  constructor() {
    super();
    this.state = {
      isFetching: false,
      services: []
    }
  }

// fetch services on page load
componentDidMount() {
  this.fetchServices();
}

fetchServices = () => {
  // const SERVER_URL = 'http://localhost:3001/services';
  const SERVER_URL = 'https://glam-b.herokuapp.com/services';
  this.setState({...this.state, isFetching: true})
  axios.get(SERVER_URL, {withCredentials: true}).then(results => {
    this.setState({
      services: results.data.services
    });
    this.setState({
      ...this.state,
      isFetching: false});
  })
}

handleClick = (service_id) => {
  this.props.history.push(`login/${service_id}`)
}

  render() {
    return (

      <div className="py-5">
        <div className="container">
          <Title name="our" title="services"/>
          <hr id="welcome"/>
          <div className="row text-center padding">
          {
            this.state.services.map(service => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-4 my-5">
                <Service key={service.id} handleClick={this.handleClick} service={service} />
                </div>
              )
            })
          }
          </div>
        </div>
     </div>

    );
  }
}
