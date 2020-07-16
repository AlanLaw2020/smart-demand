import React, {Component} from 'react'
import ReservationUnit from './ReservationUnit'

class ReservationList extends Component {

    // constructor() {
    //     super ()
    //     this.state = {
    //         isLoading: true,
    //         listUnits: []
    //     }
    // }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             isLoading: false,
    //             listUnits: this.props.currentPosts
    //         })
    //     }, 500)
    // }

    render(){
        const reservationUnitComponents = this.props.currentPosts.map(item => <ReservationUnit key={item.id} reservationUnit={item} />)

        const tbodyStyle = {
            color: 'black'
          }
          
        if(this.props.loading === true){
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