import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';
import homeImg from '../assets/homeImg.png'


const Styles = styled.div`
  .navbar {
    background-color: #82D7E3;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #000000;

    &:hover {
      color: #FF9B37;
    }
  }
`;

class NavigationBar extends Component{

    render(){
      return (
        <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">
            <img src={homeImg} alt="HOME"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/">
                  <Button>トップ画面</Button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/MakeReservations">
                  <Button>新規予約</Button>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/Reservations">
                  <Button>予約確認</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Item className="ml-auto">
                <Nav.Link href="/Logout">
                  <Button>ログアウト</Button>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles >
      );
    }
}

export default NavigationBar;