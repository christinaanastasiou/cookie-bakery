import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Bakery.module.css';

class Bakery extends Component {
  constructor() {
    super()
    this.toggleBakeryState = this.toggleBakeryState.bind(this)
    this.handleMailboxClick = this.handleMailboxClick.bind(this)
    this.state = {
      opened: true,
      mailboxFalling: false
    }
  }

  render() {
    return (
      <div className={[styles.bakery, !this.state.opened ? styles.night : ''].join(' ')}>
        <Container className={styles.wrapper}>
          <Row>
            <Col xs={{ size: 3, offset: 9 }}>
              <div
                className={styles.sun}
                onClick={this.toggleBakeryState}></div>
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
              <div
                className={[styles.mailbox, this.state.mailboxFalling ? styles.boxFalling : ''].join(' ')}
                onClick={this.handleMailboxClick}>
                <div className={styles.hole}></div>
                <span>Mailbox</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  toggleBakeryState(e) {
    this.setState({
      opened: !this.state.opened
    })
  }

  handleMailboxClick(e) {
    this.setState({
      mailboxFalling: true
    })
  }

}

export default Bakery;