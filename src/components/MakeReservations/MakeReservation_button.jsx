import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../../App.css';
import MakeReservation_button_2 from "./MakeReservation_button_2";







//予約フォームポップアップアクション
function MakeReservation_button() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button variant="primary" onClick={handleShow} size="lg">予約</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>予約を送信致しますか？</Modal.Title>
                </Modal.Header>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose} size="lg">いいえ</Button>
                    <Button variant="primary" onClick={handleShow}><MakeReservation_button_2 /></Button>
                </Modal.Footer>
            </Modal>
        </>

    );

}


export default MakeReservation_button;



