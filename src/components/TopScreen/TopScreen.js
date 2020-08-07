import React from "react";
import '../../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button'

import "./styles.css";
// import data from './table.json'
// import Data from './newInfo.json'
import { Accordion, Card } from "react-bootstrap";


export default class Topscreen extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
    componentDidMount(){
      fetch('https://jsondata.okiba.me/v1/json/evmWv200806083434')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
    }
  
  render(){
    var { isLoaded, items } = this.state;
    if (!isLoaded){
      return <div>Loading...</div>;
    }

    else
    {
    return(
      <div>
        <br />
        <br />
        <div className="container">
        <h2>お知らせ</h2>
        <div class="border">
        <div className="items">
        <div class="accordion" id="accordionExample">
          { items.map(items => {
            return(
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header class="text-left">
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      <p>{items.publish_date} {items.subject}</p>
                    </Accordion.Toggle>
                </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body class="text-left">{items.message_body}</Card.Body>
              </Accordion.Collapse>
                </Card>
              </Accordion>
            )
          })}
        </div>
        </div>
      </div>
    </div>
      </div>
    )
    }
  }
}


// function Infomation() {
//   return (
//     <div className="container">
//     <h2>お知らせ</h2>
//       <div id="largeArea">
//         <div className="posts">
//           { Data.map(post =>{
//             return(
//               <div>
//                 <p class="text-left">
//                   { post.news }
//                 </p>
//               </div>
//             )
//           }) }
//         </div>
//       </div>
//     </div>
//     );
//   }
