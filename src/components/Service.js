import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button,
  CardDeck

} from 'react-bootstrap';

export default class Service extends Component {
  constructor(props) {
    super(props);
this.handleClick = this.handleClick.bind(this);
  }

handleClick = (props) => {
  this.props.handleClick(this.props.service.id)
}



  render() {
    return(
        <CardDeck>
          <Card>

              <Card.Body className='align-items-center shadow explore-card'>
              <Card.Img className="img-s" variant="top" src="images/nice-pic.jpg"/>
              <Card.Title>{this.props.service.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">${this.props.service.cost}</Card.Subtitle>
              <Card.Text>{this.props.service.description}</Card.Text>
              <Card.Footer>

                  <Button variant="btn btn-outline-info btn-md" onClick={this.handleClick}>BOOK</Button>

              </Card.Footer>

              </Card.Body>

          </Card>
        </CardDeck>

    );
  }
}
