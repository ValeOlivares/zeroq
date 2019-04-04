import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

class Offices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offices: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    fetch('https://boiling-mountain-49639.herokuapp.com/desafio-frontend')
      .then((response) => {
        return response.json()
      })
      .then((res) => {
        this.setState({
          offices: res,
          isLoaded: true,
        });
      })
  }


  render() {
    let { isLoaded } = this.state;
    if (!isLoaded) {
      return <div> Loading...</div>
    }
    else {
      let offices = this.state.offices.map(office => {

        let waiting = 0;
        let elapsed = 0;
        Object.keys(office.lines).filter(line => {
          waiting += office.lines[line].waiting
          elapsed += office.lines[line].elapsed
        });

        let date = new Date(null);
        date.setSeconds(elapsed); 
        let time = date.toISOString().substr(11, 8);

        return (
          <Col xs={12} sm={12} md={6} lg={3} xl={3}>
            <div className={'office-container ' + (office.online ? 'online' : 'offline')}>
              <p key={office.id}>{office.name}</p>
            </div>
            <Row >
              <Col xs lg="4">
                <div className={'office-footer user ' + (office.online ? 'footer-online' : 'footer-offline')}>
                  <p>
                    <span><FontAwesomeIcon icon={faUser} /></span> { waiting }
                  </p>
                </div>
              </Col>
              <Col>
                <div className={'office-footer clock ' + (office.online ? 'footer-online' : 'footer-offline')}>
                  <p>
                    <span><FontAwesomeIcon icon={faClock} /></span> { time }
                </p>
                </div>
              </Col>
            </Row>
          </Col>

        )
      });
      return (
        <Container>
          <Row>
            {offices}
          </Row>
        </Container>
      )
    }
  }
}

export default Offices; 