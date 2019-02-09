import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class Bakery extends Component {
  render() {
    return (
        <Container className="bakery">
          <Row>
            <Col xs={{ size: 3, offset: 9 }}>
              <div className="sun"></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="triangle"></div>
              <div className="title">
                <h4>COOKIE BAKERY</h4>
              </div>
            </Col>
          </Row>
          <Row className="square">
            <Col xs="4">
              <div className="cookie"></div>
            </Col>
            <Col xs="4">
              <div className="door">
                <div className="handle"></div>
              </div>
            </Col>
            <Col xs="4">
              <div className="cookie"></div>
              <div className="mailbox">
                <div className="hole"></div>
                <h5>Mailbox</h5>
              </div>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Bakery;