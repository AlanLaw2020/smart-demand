import React, {Component} from 'react';
import '../../App.css';
import {Table} from  'react-bootstrap';
import ReservationList from './ReservationList'
import ReservationsLayout from './ReservationsLayout'
import { render } from '@testing-library/react';

function Reservations(){

  const theadStyle = {
    fontSize: 13,
    color: 'white'
  }

  return (
    <>
    <h1>予約確認一覧</h1>  
    <ReservationsLayout>
      <Table striped bordered hover size="lg">
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
    </ReservationsLayout>
    </>
    );
}

export default Reservations

{/* const theadStyle = {
  fontSize: 13,
  color: 'white'
}

class Reservations extends Component{
    constructor(){
      super()
      this.state = {
        loading: false,
        reservations: {}
      }
    }
    render(){
        return (
        <>
        <h1>予約確認一覧</h1>  
        <ReservationsLayout>
          <Table striped bordered hover size="lg">
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
            <tbody>
              <tr>
                <th>YT050808002</th>
                <th>2020/06/08/ 8:00</th>
                <th>1</th>
                <th>山田次郎</th>
                <th>080-1234-5678</th>
                <th>7/4/2020  3:00:00 PM</th>
                <th>高島平</th>
                <th>田端</th>
                <th>予約OK</th>
                <th>キャンセル</th>
              </tr>
              <tr>
                <th>YT050808002</th>
                <th>2020/06/08/ 8:00</th>
                <th>1</th>
                <th>山田次郎</th>
                <th>080-1234-5678</th>
                <th>7/4/2020  3:00:00 PM</th>
                <th>高島平</th>
                <th>田端</th>
                <th>予約OK</th>
                <th>キャンセル</th>
              </tr>
              <tr>
                <th>YT050808002</th>
                <th>2020/06/08/ 8:00</th>
                <th>1</th>
                <th>山田次郎</th>
                <th>080-1234-5678</th>
                <th>7/4/2020  3:00:00 PM</th>
                <th>高島平</th>
                <th>田端</th>
                <th>予約OK</th>
                <th>キャンセル</th>
              </tr>
            </tbody>
          </Table>
        </ReservationsLayout>
        </>
        );
      }
} */}
