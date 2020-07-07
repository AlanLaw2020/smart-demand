import React, {Component} from 'react'
import '../App.css'
import {Container, Row, Col} from 'react-bootstrap'

class NoMatch extends Component{
    render(){
        return (
          <Container fluid>
            <Row>
              <Col>You have come to the WRONGG place!</Col>
            </Row>
          </Container>
        );
      }
}

export default NoMatch;