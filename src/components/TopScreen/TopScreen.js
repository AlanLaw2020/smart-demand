import React from "react";
import Table from "./table";
import '../../App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'

import "./styles.css";
import { Link } from "react-router-dom"
import data from './table.json'

export default class Topscreen extends React.Component{
  render(){
    return(
      <div>
        <App />
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
          <Button style={{ float: "left" }} size="lg">
            予約確認
          </Button>
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
    <h2>最新のお知らせ</h2>
      <div id="largeArea">
        <p class="text-left">
          ・新型コロナウイルスに関する対策と対応方法について
        </p>
      </div>
    </div>
    );
  }