import React, {Component} from 'react'

function ReservationUnit(props){
    return(
        <tr>
            <th>{props.reservationUnit.reservationId}</th>
            <th>{props.reservationUnit.reservationTime}</th>
            <th>{props.reservationUnit.passengerCount}</th>
            <th>{props.reservationUnit.passengerName}</th>
            <th>{props.reservationUnit.contact}</th>
            <th>{props.reservationUnit.boardingTime}</th>
            <th>{props.reservationUnit.boardingPlace}</th>
            <th>{props.reservationUnit.destination}</th>
            <th>{props.reservationUnit.reservationStatus}</th>
        </tr>
    )
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