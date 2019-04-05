import React, { Component } from 'react';
import logo from './images/logo.png';
import { Container, Row, Col} from 'react-bootstrap';
import SearchBar from './components/SearchBar';
import Offices from './components/Offices'
import { library } from '@fortawesome/fontawesome-svg-core';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Row>
          <Col className='image-container'>
            <img src={logo}/>
          </Col>
        </Row>
        <Offices/>
      </div>
    );
  }
}

export default App;
