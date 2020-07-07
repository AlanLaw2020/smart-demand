import React, {Component} from 'react'
import {Container,Row,Col} from 'react-bootstrap'



class ReservationsLayout extends Component{
    render(){
        return (
          <Container>
            <Row>
              <Col>{this.props.children}</Col>
            </Row>
          </Container>
        );
      }
}

export default ReservationsLayout;