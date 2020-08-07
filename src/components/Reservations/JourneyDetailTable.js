import React, {useState, useEffect} from 'react'
import {Table, Button} from 'react-bootstrap'

function JourneyDetailTable(){
    return(
        <Table>
            <tbody>
                <tr>
                    <td>予約ID</td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>予約日付</td>
                    <td>2020/07/20</td>
                </tr>
                <tr>
                    <td>予約ステータス</td>
                    <td>OK</td>
                </tr>
                <tr>
                    <td>お届け地</td>
                    <td>高島平</td>
                </tr>
                <tr>
                    <td>お届け地</td>
                    <td>田端</td>
                </tr>
                <tr>
                    <td>キャンセル</td>
                    <td><Button variant="link" style={{padding:'0'}}>キャンセル</Button></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default JourneyDetailTable