import React, {useState, useEffect} from 'react'
import SheetAreaContainer from './SheetAreaContainer'
import TableNextContainer from './TableNextContainer'

function Reservations(){
  return (
    <>
      <h2>予約確認一覧</h2>
      <TableNextContainer/>
    </>
    )
}

export default Reservations;