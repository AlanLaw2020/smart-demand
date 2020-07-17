import React, {Component, useState, useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import JourneyMap from './JourneyMap'
import JourneyDetailTable from './JourneyDetailTable'

function ReservationDetail(){
  return (
    <Container fluid>
        <Row>

            <Col>
                <JourneyDetailTable/>
            </Col>
            <Col>
                <JourneyMap/>
            </Col>

        </Row>
    </Container>
    )
}

export default ReservationDetail;