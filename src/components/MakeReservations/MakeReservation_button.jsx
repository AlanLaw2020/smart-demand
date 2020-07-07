import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './App.css';








//予約フォームポップアップアクション
function MakeReservation_button() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <>
            <Button variant="primary" onClick={handleShow}>I make a reservation</Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>ほんとに予約するの?</Modal.Title>
                </Modal.Header>
                <Modal.Body>you''ll make a reservation?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>NO!</Button>
                    <Button variant="primary">OK!</Button>
                </Modal.Footer>
            </Modal>
        </>

    );

}


export default MakeReservation_button;



