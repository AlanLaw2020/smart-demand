import React from 'react';
import * as ReactBootStrap from "react-bootstrap"


export default function Table (props) {
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
                {
                    props.data.map(row =>(
                        <tr>
                            <td>{row.name}</td>
                            <td>{row.date}</td>
                            <td>{row.ride}</td>
                            <td>{row.leave}</td>
                        </tr>
                    ))
                }
            </tbody>
        </ReactBootStrap.Table>
    
    </div>
)
}