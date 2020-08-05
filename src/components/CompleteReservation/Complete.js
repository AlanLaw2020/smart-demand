import React from 'react';
import './Complete.css'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom"

export default class Complete extends React.Component{
  render(){
    return(
      <div>
        <App />
      </div>
    )
  }
}

function App() {
  return (
    <div className="container">
      <br/>
      <br/>
      <h1>予約を完了致しました。</h1>
      <div>
        <br/>
        <br/>
        <br/>
        <Link to="Reservations">
          <Button style={{ float: "right" }} size="lg">
              予約確認へ
          </Button>
        </Link>
        <Link to="MakeReservations">
          <Button style={{ float: "left" }} size="lg">
              続けて予約する
          </Button>
        </Link>
      </div>
    </div>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <div className="container">
//         <h2>直近の予約状況</h2>
//         <Table data={data}/>
//         <div className="mb-2">
//           <Link to="Reservations">
//             <Button style={{ float: "left" }} size="lg">
//               予約確認
//             </Button>
//           </Link>
//           <Link to="MakeReservations">
//             <Button style={{ float: "right" }} size="lg">
//               新規予約
//             </Button>
//           </Link>
//         </div>
//         <br />
//         <br />
//       </div>
//     </div>   
//   );
