import React, {Component} from 'react'
import resData from "./resData"
import ReservationUnit from './ReservationUnit'

class ReservationList extends Component {

    constructor() {
        super ()
        this.state = {
            isLoading: true,
            listUnits: []
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                isLoading: false,
                listUnits: resData
            })
        }, 1500)
    }

    render(){
        const reservationUnitComponents = this.state.listUnits.map(item => <ReservationUnit key={item.id} reservationUnit={item} />)

        const tbodyStyle = {
            fontSize: 13,
            color: 'black'
          }
          
        if(this.state.isLoading === true){
            return(
                    <tr>
                        <td colSpan='10'>Loading...</td>
                    </tr>
            )
        }

        return (
            <tbody style={tbodyStyle}>
                {reservationUnitComponents}
            </tbody>
        )
    }
}

export default ReservationList;