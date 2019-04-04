import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

class Offices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offices: [],
      isLoaded: false,
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
              <div className='office-container'>
                <p key={office.id}>{office.name}</p>
              </div>
              <div className='office-footer'>
                DATOS
              </div>
            </Col>
            ))}
          </Row>
        </Container>
      )
    }
  }
}

export default Offices; 