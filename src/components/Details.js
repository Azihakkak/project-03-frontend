import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import {
  Card,
  Button,
  Container,
  Row,
  Col
} from 'react-bootstrap';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceId: this.props.match.params.serviceId,
      appointment: {},
      inCard: false,
      service: {},
      userId: this.props.match.params.userId
    }
  }

  componentDidMount() {
      this.fetchService()
    }

  fetchService = () => {
    const SERVER_URL = `http://localhost:3001/services/${this.state.serviceId}`;
    axios.get(SERVER_URL, {withCredentials: true}).then(result => {
      this.setState({service: result.data.service});
    })
  }

  render() {
    const now = new Date();
    return(

      <Container>
      <Row className="justify-content-center text-center">
      <Col className="col-xs-12 col-sm-6 col-md-6">
      <Card>
      <Card.Body className='align-items-center shadow explore-card'>
      <Card.Title>{this.state.service.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">${this.state.service.cost}</Card.Subtitle>
      <Card.Text>{this.state.service.description}</Card.Text>
      <mobiscroll.Form>
      <div className="mbsc-grid mbsc-form-grid">
      <div className="mbsc-row mbsc-form-grid">
      <div className="mbsc-col-sm-12 mbsc-col-lg-6">
        <mobiscroll.Datetime value={now}>
  			<mobiscroll.Input inputStyle="box" labelStyle="stacked">Expanded</mobiscroll.Input>
  		  </mobiscroll.Datetime>
      </div>
      </div>
      </div>
      </mobiscroll.Form>

      <Link to='/services'>
      <Button variant="btn btn-outline-secondary" className="mb-3">Keep Browsing</Button>
      </Link>
      <Card.Footer className="text-muted">
      <Link to={`/card/${this.state.userId}`}><Button variant="btn btn-light ">Add to Card</Button></Link>
      </Card.Footer>
      </Card.Body>
      </Card>
      </Col>
      </Row>
      </Container>


      // <Card style={{ width: '18rem' }}>
      //     <Card.Img variant="top" src="" />
      //     <Card.Body className='align-items-center shadow explore-card'>
      //     <Card.Title>{this.state.service.title}</Card.Title>
      //     <Card.Subtitle className="mb-2 text-muted">${this.state.service.cost}</Card.Subtitle>
      //     <Card.Text>{this.state.service.description}</Card.Text>
      //     <Link to={`/details/${this.state.service.id}`}>
      //       <Button variant="btn btn-outline-secondary">BOOK</Button>
      //       </Link>
      //     </Card.Body>
      // </Card>

    );
  }
}
