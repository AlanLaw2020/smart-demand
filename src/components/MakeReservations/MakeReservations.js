import React, { Component } from 'react'
import '../../App.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Clock from './Clock';
import './styles.css'
import MakeReservation_button from "./MakeReservation_button";
import MapWithASearchBox from './MapWithASearchBox';
import MapWithADirectionsRenderer from './Direction';
import "bootstrap/dist/css/bootstrap.min.css";








class MakeReservations extends Component {
    render() {
        return (

            <div className="App">
                <br></br>
                <div className="container">
                    <Card style={{ width: '70rem' }}>
                        <Card.Header as="h3">予約フォーム</Card.Header>
                        <Card.Body>
                            <Container>
                                <Row>
                                    <Col xl={7}>
                                        <Card.Text>
                                            <label for="yoyaku" class="col-sm-5 col-form-label"><h5>予約希望日・時間</h5></label>
                                            <input type="datetime-local" class="form-control" id="nichiji" placeholder="日時" />
                                            <br></br><br></br>

                                            <label for="ninzu" class="col-sm-5 col-form-label"><h5>乗車人数</h5></label>
                                            <select class="form-control" id="ninzu">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option></select>
                                            <br></br><br></br>

                                            <label for="josha" class="col-sm-5 col-form-label"><h5>乗車地点</h5></label>
                                            <input type="josha" class="form-control" id="josha" placeholder="乗車地点" />
                                            <br></br><br></br>


                                            <label for="kosha" class="col-sm-5 col-form-label"><h5>降車地点</h5></label>
                                            <input type="kosha" class="form-control" id="kosha" placeholder="降車地点" />
                                            <br></br><br></br>


                                            <label for="bikou">備考欄</label>
                                            <textarea class="form-control" id="bikou" rows="3"></textarea>
                                            <br></br>

                                            <MakeReservation_button />
                                        </Card.Text></Col>


                                    <Col xl={5}>
                                        <MapWithASearchBox /></Col>

                                </Row>
                            </Container>

                        </Card.Body>
                    </Card>
                </div>
            </div >

        );
    }
}

export default MakeReservations;