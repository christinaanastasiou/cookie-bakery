import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Bakery.module.css';

class Bakery extends Component {
  render() {
    return (
        <Container className={styles.wrapper}>
          <Row>
            <Col xs={{ size: 3, offset: 9 }}>
              <div className={styles.sun}></div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={styles.triangle}></div>
              <div className={styles.headline}>
                <h4>COOKIE BAKERY</h4>
              </div>
            </Col>
          </Row>
          <Row className={styles.square}>
            <Col xs="4">
              <div className={styles.cookie}></div>
            </Col>
            <Col xs="4">
              <div className={styles.door}>
                <div className={styles.handle}></div>
              </div>
            </Col>
            <Col xs="4">
              <div className={styles.cookie}></div>
              <div className={styles.mailbox}>
                <div className={styles.hole}></div>
                <h5>Mailbox</h5>
              </div>
            </Col>
          </Row>
        </Container>
    );
  }
}

export default Bakery;