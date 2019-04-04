import React, { Component } from 'react';
import logo from './images/logo.png';
import { Container, Row, Col} from 'react-bootstrap';
import SearchBar from './components/SearchBar'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class App extends Component {
  render() {
    return (
      <Container className='App'>
        <Row>
          <Col className='image-container'>
            <img src={logo}/>
          </Col>
        </Row>
        <SearchBar/>
      </Container>
    );
  }
}

export default App;
