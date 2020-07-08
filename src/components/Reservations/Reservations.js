import React, {Component} from 'react';
import '../../App.css';
import {Table,Button} from  'react-bootstrap';
import ReservationList from './ReservationList'
import ReservationsLayout from './ReservationsLayout'
import PaginationBar from './PaginationBar'

class Reservations extends Component {

  render() {
    const theadStyle = {
      fontSize: 'auto',
      color: 'white'
    }
    const refreshButton = {
      // float: "left"
    }
  
    return (
      <>
      <h2>予約確認一覧</h2>  
      <ReservationsLayout>
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
          <ReservationList/>
        </Table>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <PaginationBar/>
          <Button href = '/Reservations'>予約一覧表更新</Button>
        </div>
      </ReservationsLayout>
      </>
      )
  }
}

export default Reservations
