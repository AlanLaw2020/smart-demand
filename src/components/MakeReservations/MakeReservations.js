import React, { Component } from 'react'
import '../../App.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
import Clock from './Clock';
import Map from './Map';
//import MakeReservation_button from "./MakeReservation_button";
//import MakeReservation_button_2 from "./MakeReservation_button";




class MakeReservations extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">

                    <Clock />

                    <div className="card w-50">
                        <h1 className="card-header">予約フォーム</h1>
                        <div className="card-body">
                            <Container >
                                <form>
                                    <div className="form-group row">
                                        <label for="yoyaku" class="col-sm-5 col-form-label"><h3>予約希望日・時間</h3></label>
                                        <div class="col-sm-7">
                                            <input type="datetime-local" class="form-control" id="nichiji" placeholder="日時" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="ninzu" class="col-sm-5 col-form-label"><h3>乗車人数</h3></label>
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
                                        <label for="josha" class="col-sm-5 col-form-label"><h3>乗車地点</h3></label>
                                        <div class="col-sm-7">
                                            <input type="josha" class="form-control" id="josha" placeholder="乗車地点" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label for="kosha" class="col-sm-5 col-form-label"><h3>降車地点</h3></label>
                                        <div class="col-sm-7">
                                            <input type="kosha" class="form-control" id="kosha" placeholder="降車地点" />
                                        </div>
                                    </div>
                                </form>
                                
                            </Container>
                        </div>
                    </div>
                </header>

                <div>

                    <Map
                        google={this.props.google}
                        center={{ lat: 18.5204, lng: 73.8567 }}
                        height='300px'
                        zoom={15}
                    />
                </div>


            </div >
        );
    }
}

export default MakeReservations;