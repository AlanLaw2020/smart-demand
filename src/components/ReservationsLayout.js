import React, {Component} from 'react'
import {Container} from 'react-bootstrap'

class Layout extends Component{
    render(){
        return (
          <Container>
              {this.props.children}
          </Container>
        );
      }
}

export default Layout;