import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faClock} from '@fortawesome/free-regular-svg-icons';

class Offices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offices: [],
      officeStatus: "online",
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
          isLoaded:true,
        });
      })
  }

 
  render() {
    let { isLoaded, offices} = this.state;
    if (!isLoaded) {
      return <div> Loading...</div>
    }
    else {
      return (
        <Container>
          <Row>
            {offices.map(office =>(
            <Col xs={6} sm={6} md={3} lg={3} xl={3}>
              <div className={'office-container ' + (office.online ? 'online' : 'offline')}>   
                <p key={office.id}>{office.name}</p>
              </div> 
              <Row >
                <Col xs lg="4">
                  <div  className={'office-footer user ' +(office.online ? 'footer-online' : 'footer-offline')}>
                    <p>
                      <span><FontAwesomeIcon icon={faUser} /></span> 5
                    </p>
                  </div>
                </Col>
                <Col>
                  <div  className={'office-footer clock ' +(office.online ? 'footer-online' : 'footer-offline')}>
                    <p>
                      <span><FontAwesomeIcon icon={faClock} /></span> 2:10
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
            ))}
          </Row>
        </Container>
      )
    }
  }
}

export default Offices; 