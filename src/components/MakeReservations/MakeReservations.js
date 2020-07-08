import React, { Component } from 'react'
import '../../App.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Clock from './Clock';
import './styles.css'
import MakeReservation_button from "./MakeReservation_button";
import MapWithASearchBox from './MapWithASearchBox';
import MapWithADirectionsRenderer from './Direction';







class MakeReservations extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <Clock />

                    <div className="card" >
                        <h2 className="card-header">予約フォーム</h2>
                        <div className="card-body">
                            <Container >
                                <form>
                                    <div className="form-group row">
                                        <label for="yoyaku" class="col-sm-5 col-form-label"><h4>予約希望日・時間</h4></label>
                                        <div class="col-sm-7">
                                            <input type="datetime-local" class="form-control" id="nichiji" placeholder="日時" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="ninzu" class="col-sm-5 col-form-label"><h4>乗車人数</h4></label>
                                        <div class="col-sm-7">
                                            <select class="form-control" id="ninzu">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="josha" class="col-sm-5 col-form-label"><h4>乗車地点</h4></label>
                                        <div class="col-sm-7">
                                            <input type="josha" class="form-control" id="josha" placeholder="乗車地点" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="kosha" class="col-sm-5 col-form-label"><h4>降車地点</h4></label>
                                        <div class="col-sm-7">
                                            <input type="kosha" class="form-control" id="kosha" placeholder="降車地点" />
                                        </div>
                                    </div>
                                </form>
                                <MakeReservation_button />
                            </Container>
                        </div>
                    </div>
                </header>

                <div>

                    <MapWithASearchBox />
                    <MapWithADirectionsRenderer />
                </div>


            </div >
        );
    }
}

export default MakeReservations;