import React from "react";
import Table from "./table";
import '../../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'

import "./styles.css";
import { Link } from "react-router-dom"
import data from './table.json'
import Data from './newInfo.json'

// //エラーメッセージ
// state = {
//   items:[],
//   errorMessage:''
// }
// getData() {
//   axios.get('http://xxxxxxxxxxxxx')
//     .then(results =>{
//       const data = result data;
//     }

//     )
//     .catch(err => { console.log(err) })
// }

export default class Topscreen extends React.Component{
  render(){
    return(
      <div>
        {/* <App /> */}
        <br />
        <br />
        <Infomation />
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>直近の予約状況</h2>
        <Table data={data}/>
        <div className="mb-2">
          <Link to="Reservations">
            <Button style={{ float: "left" }} size="lg">
              予約確認
            </Button>
          </Link>
          <Link to="MakeReservations">
            <Button style={{ float: "right" }} size="lg">
              新規予約
            </Button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    </div>   
  );
}

function Infomation() {
  return (
    <div className="container">
    <h2>お知らせ</h2>
      <div id="largeArea">
        <div className="posts">
          { Data.map(post =>{
            return(
              <div>
                <p class="text-left">
                  { post.news }
                </p>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
    );
  }