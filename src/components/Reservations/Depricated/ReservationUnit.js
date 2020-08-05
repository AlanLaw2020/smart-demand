import React, {Component} from 'react'
import {Button} from  'react-bootstrap';

class ReservationUnit extends Component {

    

    render() {
                
        if(this.props.reservationUnit.reservationStatus === '予約OK'){
            return(
                <tr>
                    <td>{this.props.reservationUnit.reservationId}</td>
                    <td>{this.props.reservationUnit.reservationTime}</td>
                    <td>{this.props.reservationUnit.passengerCount}</td>
                    <td>{this.props.reservationUnit.passengerName}</td>
                    <td>{this.props.reservationUnit.contact}</td>
                    <td>{this.props.reservationUnit.date}</td>
                    <td>{this.props.reservationUnit.boardingPlace}</td>
                    <td>{this.props.reservationUnit.destination}</td>
                    <td>{this.props.reservationUnit.reservationStatus}</td>
                    <td>
                        <Button variant="link" style={{padding:'0'}}>キャンセル</Button>
                    </td>
                </tr>
            )
        }else if(this.props.reservationUnit.reservationStatus === '予約確認中'){
            return(
                <tr>
                    <td>{this.props.reservationUnit.reservationId}</td>
                    <td>{this.props.reservationUnit.reservationTime}</td>
                    <td>{this.props.reservationUnit.passengerCount}</td>
                    <td>{this.props.reservationUnit.passengerName}</td>
                    <td>{this.props.reservationUnit.contact}</td>
                    <td>{this.props.reservationUnit.date}</td>
                    <td>{this.props.reservationUnit.boardingPlace}</td>
                    <td>{this.props.reservationUnit.destination}</td>
                    <td>{this.props.reservationUnit.reservationStatus}</td>
                    <td>
                        <Button variant="link" style={{padding:'0'}}>キャンセル</Button>
                    </td>
                </tr>
            )
        }else{
            return(
                <tr>
                    <td>{this.props.reservationUnit.reservationId}</td>
                    <td>{this.props.reservationUnit.reservationTime}</td>
                    <td>{this.props.reservationUnit.passengerCount}</td>
                    <td>{this.props.reservationUnit.passengerName}</td>
                    <td>{this.props.reservationUnit.contact}</td>
                    <td>{this.props.reservationUnit.date}</td>
                    <td>{this.props.reservationUnit.boardingPlace}</td>
                    <td>{this.props.reservationUnit.destination}</td>
                    <td>{this.props.reservationUnit.reservationStatus}</td>
                    <td>{''}</td>
                </tr>
            )
        }
    }
}

export default ReservationUnit;