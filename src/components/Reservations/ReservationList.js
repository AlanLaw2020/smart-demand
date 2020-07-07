import React, {Component} from 'react'
import resData from "./resData"
import ReservationUnit from './ReservationUnit'

function ReservationList(){
    const reservationUnitComponents = resData.map(item => <ReservationUnit key={item.id} reservationUnit={item} />)

    const tbodyStyle = {
        fontSize: 13,
        color: 'black'
      }

    return (
        <tbody style={tbodyStyle}>
            {reservationUnitComponents}
        </tbody>
    )
}

export default ReservationList;

// class ReservationList extends Component{

//     render(){
//         return (
//             <tr>
//                 <th>{this.props.reservationID}</th>
//                 <th>2020/06/08/ 8:00</th>
//                 <th>1</th>
//                 <th>山田次郎</th>
//                 <th>080-1234-5678</th>
//                 <th>7/4/2020  3:00:00 PM</th>
//                 <th>高島平</th>
//                 <th>田端</th>
//                 <th>予約OK</th>
//                 <th>キャンセル</th>
//             </tr>
//         );
//       }
// }