import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './App.css';








//予約フォームポップアップアクション_2
function MakeReservation_button_2() {
    const [smShow, setSmShow] = useState(false);

    return (
        <>
            <Button onClick={() => setSmShow(true)}>OK</Button>{' '}
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">予約したよ</Modal.Title>
                </Modal.Header>
                <Modal.Body>reserved!</Modal.Body>
            </Modal>
        </>
    );
}


export default MakeReservation_button_2;



