import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardDeck

} from 'react-bootstrap';

export default class Service extends Component {



  render() {
    return(
        <CardDeck>
          <Card>
              <Card.Body className='align-items-center shadow explore-card'>
              <Card.Title>{this.props.service.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">${this.props.service.cost}</Card.Subtitle>
              <Card.Text>{this.props.service.description}</Card.Text>
              <Link to={`/details/${this.props.service.id}`}>
                <Button variant="btn btn-outline-secondary">BOOK</Button>
                </Link>
              </Card.Body>
          </Card>
        </CardDeck>

    );
  }
}
