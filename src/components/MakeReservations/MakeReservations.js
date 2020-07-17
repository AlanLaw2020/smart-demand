import React, { Component } from 'react'
import '../../App.css'
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Clock from './Clock';
import './styles.css'
import MakeReservation_button from "./MakeReservation_button";
import MapWithASearchBox from './MapWithASearchBox';
import MapWithADirectionsRenderer from './Direction';
import "bootstrap/dist/css/bootstrap.min.css";
import MapWithADirectionsRenderer_2 from './Direction_search';
import props from "./MapWithASearchBox";
import PlacesWithStandaloneSearchBox from './PlacesWithStandaloneSearchBox';
const { StandaloneSearchBox } = require("react-google-maps/lib/components/places/StandaloneSearchBox");
/*global google*/




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
                                    <Col xs={7}>
                                        <br></br>
                                        <Card.Text>
                                            <label for="yoyaku" class="col-sm-5 col-form-label"><h5>予約希望日・時間</h5></label>
                                            <input type="datetime-local" class="form-control" id="nichiji" placeholder="日時" />
                                            <br></br>

                                            <label for="name"><h5>乗車者</h5></label>
                                            <input type="name" class="form-control" id="name" placeholder="お客様名" />

                                            <br></br>

                                            <label for="ninzu" class="col-sm-5 col-form-label"><h5>乗車人数</h5></label>
                                            <select class="form-control" id="ninzu">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option></select>
                                            <br></br>
                                            <Col xs={7}></Col>
                                            <Col xs={7}></Col>
                                            <label for="josha" class="col-sm-5 col-form-label"><h5>乗車地点</h5></label>
                                            {/*<input type="josha" class="form-control" id="josha" placeholder="乗車地点" />*/}
                                            <PlacesWithStandaloneSearchBox />
                                            <br></br>


                                            <label for="kosha" class="col-sm-5 col-form-label"><h5>降車地点</h5></label>
                                            {/*<input type="kosha" class="form-control" id="kosha" placeholder="降車地点" />*/}
                                            <PlacesWithStandaloneSearchBox />
                                            <br></br>


                                            <label for="bikou"><h5>備考欄</h5></label>
                                            <textarea class="form-control" id="bikou" rows="2"></textarea>
                                            <br></br>


                                            <MakeReservation_button />
                                            <br></br>


                                        </Card.Text></Col>


                                    <Col xs={5}>
                                        <MapWithADirectionsRenderer_2 />

                                    </Col>
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