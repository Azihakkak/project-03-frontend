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
  const SERVER_URL = 'http://localhost:3001/services';
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

  render() {
    return (

      <div className="py-5">
        <div className="container">
          <Title name="our" title="services"/>
          <hr />
          <div className="row text-center padding">
          {
            this.state.services.map(service => {
              return (
                <div className="col-xs-12 col-sm-6 col-md-4 my-5">
                <Service key={service.id} service={service} />
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
