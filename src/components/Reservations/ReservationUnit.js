import React, {Component} from 'react'
import {Button} from  'react-bootstrap';

class ReservationUnit extends Component {

    

    render() {
                
        if(this.props.reservationUnit.reservationStatus === '予約OK'){
            return(
                <tr style={{marginBottom:'auto',alignItems: 'center'}}>
                    <td>{this.props.reservationUnit.reservationId}</td>
                    <td>{this.props.reservationUnit.reservationTime}</td>
                    <td>{this.props.reservationUnit.passengerCount}</td>
                    <td>{this.props.reservationUnit.passengerName}</td>
                    <td>{this.props.reservationUnit.contact}</td>
                    <td>{this.props.reservationUnit.boardingTime}</td>
                    <td>{this.props.reservationUnit.boardingPlace}</td>
                    <td>{this.props.reservationUnit.destination}</td>
                    <td>{this.props.reservationUnit.reservationStatus}</td>
                    <td>
                        <Button variant="link" size='sm'>キャンセル</Button>
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
                    <td>{this.props.reservationUnit.boardingTime}</td>
                    <td>{this.props.reservationUnit.boardingPlace}</td>
                    <td>{this.props.reservationUnit.destination}</td>
                    <td>{this.props.reservationUnit.reservationStatus}</td>
                    <td>
                        <Button variant="link" size='sm'>キャンセル</Button>
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
                    <td>{this.props.reservationUnit.boardingTime}</td>
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

// {
//     id:1,
//     reservationId:"YT050808002",
//     reservationTime:"2020/06/07 8:00",
//     passengerCount:"1",
//     passengerName:"山田次郎",
//     contact:"080-1234-5678",
//     boardingTime:"7/4/2020  3:00:00 PM",
//     boardingPlace:"高島平",
//     destination:"田端",
//     reservationStatus:"予約OK"
// },

// class ReservationUnit extends Component{
//     // constructor(props) {
//     //     super()
//     //     this.state = {
//     //       loading: false,
//     //       reservationUnit: {}
//     //     }
//     // }
//     render(){
//         return (
//             <tr>
                // <th>{this.props.reservationID}</th>
                // <th>2020/06/08/ 8:00</th>
                // <th>1</th>
                // <th>山田次郎</th>
                // <th>080-1234-5678</th>
                // <th>7/4/2020  3:00:00 PM</th>
                // <th>高島平</th>
                // <th>田端</th>
                // <th>予約OK</th>
                // <th>キャンセル</th>
//             </tr>
//         );
//       }
// }