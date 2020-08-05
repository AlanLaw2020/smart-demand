import React, {useState, useEffect} from 'react'
import {Table} from 'react-bootstrap'

function JourneyDetailTable(){
    return(
        <Table>
            <tbody>
                <tr>
                    <td>乗車日付</td>
                    <td>2020/07/04</td>
                </tr>
                <tr>
                    <td>乗車時間</td>
                    <td>13:00</td>
                </tr>
                <tr>
                    <td>お迎え地</td>
                    <td>高島平</td>
                </tr>
                <tr>
                    <td>お届け地</td>
                    <td>田端</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default JourneyDetailTable