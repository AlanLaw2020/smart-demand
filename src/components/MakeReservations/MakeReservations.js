import React, { Component } from 'react'
import '../../App.css'
import { Button, Container, Row, Col } from 'react-bootstrap';
//import * as ReactDatetimeClass from 'react-datetime';
import Clock from './Clock';
import Map from './Map';
import * as ReactDatetimeClass from 'react-datetime';


class MakeReservations extends Component {
    render() {
        return (
            <div>





                <Clock />


                <div className="card w-50" float="center">
                    <h1 className="card-header">予約フォーム</h1>
                    <div className="card-body">
                        <Container >
                            <form>
                                <div className="form-group row">
                                    <label for="yoyaku" class="col-sm-5 col-form-label"><h3>予約希望日・時間</h3></label>
                                    <div class="col-sm-7">
                                        <ReactDatetimeClass />
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
                            <Button variant="primary" size="lg" block>予約</Button>
                        </Container>
                    </div>
                </div>




                <div>
                    <Map
                        google={this.props.google}
                        center={{ lat: 18.5204, lng: 73.8567 }}
                        height='300px'
                        zoom={15} />
                </div>



            </div >
        );
    }
}

export default MakeReservations;