import React from 'react';
import * as ReactBootStrap from "react-bootstrap"

const Table =() =>{
return(
    <div className="table">
        <ReactBootStrap.Table bordered>
            <thead id="tableheader">
                <tr>
                    <th>乗車者</th>
                    <th>乗車日時</th>
                    <th>乗車地点</th>
                    <th>降車地点</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>山田太郎</td>
                    <td>2020/7/3 15:00</td>
                    <td>高島平駅</td>
                    <td>田端駅</td>
                </tr>
                <tr>
                    <td>佐藤太郎</td>
                    <td>2020/8/1 20:00</td>
                    <td>梅田駅</td>
                    <td>天王寺</td>
                </tr>
                <tr>
                    <td>田中三郎</td>
                    <td>2020/10/01 14:29</td>
                    <td>難波</td>
                    <td>京橋</td>
                </tr>
            </tbody>
        </ReactBootStrap.Table>
    
    </div>
)
}
export default Table;