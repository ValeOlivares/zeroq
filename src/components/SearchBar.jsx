import React, { Component } from 'react';
import { Row, Col, Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends Component {
  render() {
    return (
      <Row>
        <Col className='searchbar-container'>
          <Row>
            <Col xs={11} sm={11} md={10} lg={4} xl={4}>
              <Form.Control type="text" placeholder="Buscar sucursal" className= "searchbar"/>
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default SearchBar; 