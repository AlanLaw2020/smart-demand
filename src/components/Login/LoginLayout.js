import React, {Component} from 'react'
import {Container,Row,Col} from 'react-bootstrap'

class LoginLayout extends Component{
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

export default LoginLayout;