import React, {Component, useState, useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import JourneyMap from './JourneyMap'
import JourneyDetailTable from './JourneyDetailTable'

function ReservationDetail(){
  return (
    <Container>
        <Row fluid style={{display:'flex', justifyContent:'center'}}>
            {/* <Col>
                <JourneyDetailTable/>
            </Col> */}
            <JourneyMap style={{display:'flex', flexBasis:'100%'}}/>
        </Row>
    </Container>
    )
}

export default ReservationDetail;