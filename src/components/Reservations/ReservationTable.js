import React, {Component} from 'react';
import '../../App.css';
import {Table} from  'react-bootstrap';
import ReservationList from './ReservationList'

class Reservations extends Component {

  render() {
    const theadStyle = {
      color: 'white'
    }
  
    return (
      <>
        <Table striped bordered hover size="lg" responsive>
          <thead bgcolor="7D7D7D" style={theadStyle}>
            <tr>
              <th>予約ID</th>
              <th>予約日時</th>
              <th>人数</th>
              <th>乗車者</th>
              <th>コンタクト</th>
              <th>乗車日時</th>
              <th>乗車地点</th>
              <th>降車地点</th>
              <th>ステータス</th>
              <th>キャンセル</th>
            </tr>
          </thead>
          <ReservationList currentPosts={this.props.currentPosts} loading={this.props.loading}/>
        </Table>
      </>
      )
  }
}

export default Reservations
