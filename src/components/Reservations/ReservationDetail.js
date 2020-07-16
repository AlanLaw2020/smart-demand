import React, {Component, useState, useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import JourneyMap from './JourneyMap'

function ReservationDetail(){
  return (
    <Container fluid>
        <Row>
            <Col>
                <div>journey detail goes here</div>
            </Col>
            <Col>
                <JourneyMap/>
            </Col>
        </Row>
    </Container>
    )
}

export default ReservationDetail;