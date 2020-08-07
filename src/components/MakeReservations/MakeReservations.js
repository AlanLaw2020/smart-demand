import React, { Component } from 'react'
import '../../App.css'
import { Button, Container, Row, Col, Card, Form } from 'react-bootstrap';
import Clock from './Clock';
import './styles.css'
import MakeReservation_button from "./MakeReservation_button";
import MapWithASearchBox from './MapWithASearchBox';
import MapWithADirectionsRenderer from './Direction';
import "bootstrap/dist/css/bootstrap.min.css";
import MapWithADirectionsRenderer_2 from './Direction_search';
import props from "./MapWithASearchBox";
import PlacesWithStandaloneSearchBox from './PlacesWithStandaloneSearchBox';
import MyFancyComponent from './New-Normal-Map';
import Geosuggest from 'react-geosuggest';
import DisplayingErrorMessagesExample from './Validation'



/*global google*/




class MakeReservations extends Component {

    render() {

        function initialize() {
            var Marker;
            var map;
            var latlng = new google.maps.LatLng(35.658704, 139.745408);
            var opts = {
                zoom: 15,
                center: latlng,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            map = new google.maps.Map
                (document.getElementById("map_canvas"), opts);

            //地図クリックイベントの登録
            google.maps.event.addListener(map, 'click',
                function (event) {
                    if (Marker) { Marker.setMap(null) };
                    Marker = new google.maps.Marker({
                        position: event.latLng,
                        draggable: true,
                        map: map
                    });
                    infotable(Marker.getPosition().lat(),
                        Marker.getPosition().lng(), map.getZoom());
                    geocode();
                    //マーカードラッグイベントの登録
                    google.maps.event.addListener(Marker, 'dragend',
                        function (event) {
                            infotable(Marker.getPosition().lat(),
                                Marker.getPosition().lng(), map.getZoom());
                            geocode();
                        })
                    //地図ズームチェンジイベントの登録
                    google.maps.event.addListener(map, 'zoom_changed',
                        function (event) {
                            infotable(Marker.getPosition().lat(),
                                Marker.getPosition().lng(), map.getZoom());
                        })
                })
            //ジオコーディング
            function geocode() {
                var geocoder = new google.maps.Geocoder();
                geocoder.geocode({ 'location': Marker.getPosition() },
                    function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK && results[0]) {
                            document.getElementById('id_address').innerHTML =
                                results[0].formatted_address.replace(/^日本, /, '');
                        } else {
                            document.getElementById('id_address').innerHTML =
                                "Geocode 取得に失敗しました";
                            alert("Geocode 取得に失敗しました reason: "
                                + status);
                        }
                    });
            }

            //HTMLtagを更新
            function infotable(ido, keido, level) {
                document.getElementById('id_ido').innerHTML = ido;
                document.getElementById('id_keido').innerHTML = keido;
                document.getElementById('id_level').innerHTML = level;
            }
        }

        return (

            <div className="App">
                <br></br>
                <div className="container">
                    <Form name="form1">
                        <Card>
                            <Card.Header as="h3">予約フォーム</Card.Header>

                            <Card.Body>
                                <Container>
                                    <Row>

                                        <Col sm={7}>

                                            <Card.Text>

                                                <Form.Group controlId="date">
                                                    <Form.Label><h5>希望日</h5></Form.Label>
                                                    <input type="date" class="form-control" name="date" id="date" placeholder="希望日" required />
                                                </Form.Group>
                                                <br></br>

                                                <Form.Group controlId="pickup-time">
                                                    <Form.Label><h5>時間</h5></Form.Label>
                                                    <input type="time" class="form-control" step="1800"  name="pickup-time" id="pickup-time" placeholder="希望時間" required />
                                                </Form.Group>
                                                <br></br>

                                                <Form.Group controlId="number">
                                                    <Form.Label><h5>乗車人数</h5></Form.Label>
                                                    <Form.Control as="select" name="number">
                                                        <option>1</option>
                                                        <option>2</option>
                                                        <option>3</option>
                                                        <option>4</option>
                                                        <option>5</option>
                                                    </Form.Control>
                                                </Form.Group>
                                                <br></br>


                                                <Form.Group controlId="from">
                                                    <Form.Label><h5>お迎え地</h5></Form.Label>
                                                    <Form.Control type="address" placeholder="お迎え地" />
                                                </Form.Group>
                                                {/*<input type="josha" class="form-control" id="josha" placeholder="乗車地点" />*/}
                                                {/*<PlacesWithStandaloneSearchBox />*/}
                                                <br></br>



                                                <Form.Group controlId="to">
                                                    <Form.Label><h5>お届け地</h5></Form.Label>
                                                    <Form.Control type="address" placeholder="お届け地" />
                                                </Form.Group>
                                                {/*<input type="kosha" class="form-control" id="kosha" placeholder="降車地点" />*/}
                                                {/*<PlacesWithStandaloneSearchBox />*/}
                                                <br></br>

                                                <Form.Group controlId="memo">
                                                    <Form.Label><h5>備考欄</h5></Form.Label>
                                                    <Form.Control as="textarea" rows="2" />
                                                </Form.Group>

                                                <MakeReservation_button type="submit" />



                                            </Card.Text></Col>


                                        <Col sm={5}>
                                            {/*<MapWithADirectionsRenderer_2 />*/}
                                            <MyFancyComponent />

                                            {/*<LocationField />*/}
                                            <script
                                                src="https://maps.google.com/maps/api/js?key=AIzaSyC7fei0dvf-f0SLltSVkWeo-rM0wr57bjk"></script>
                                            <body onload="initialize()" />
                                            <div id="map_canvas"></div>

                                        </Col>



                                    </Row>
                                </Container>

                            </Card.Body>
                        </Card>
                    </Form>


                </div>
            </div >

        );
    }
}

export default MakeReservations;