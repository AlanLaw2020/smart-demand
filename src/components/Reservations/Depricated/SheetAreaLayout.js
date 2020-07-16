import React, {Component} from 'react'
import {Container,Row,Col} from 'react-bootstrap'

class SheetAreaLayout extends Component{
    render(){
        return (
          <Container fluid>
            <Row>
              <Col>{this.props.children}</Col>
            </Row>
          </Container>
        );
      }
}

export default SheetAreaLayout;