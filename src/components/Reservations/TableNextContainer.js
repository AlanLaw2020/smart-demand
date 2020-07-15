import React, {useState, useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import resDataMap from './resDataMap'
import SheetAreaLayout from './SheetAreaLayout'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Button} from  'react-bootstrap';
import './tableNext.css'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

function TableNextContainer(){

    const columns = [{
        dataField: 'id',
        text: '項目',
        sort: true
    }, {
        dataField: 'reservationId',
        text: '予約ID',
        sort: true
    }, {
        dataField: 'reservationTime',
        text: '予約日時',
        sort: true
    },{
        dataField: 'passengerCount',
        text: '人数',
        sort: true
    },{
        dataField: 'passengerName',
        text: '乗車者',
        sort: true
    },{
        dataField: 'contact',
        text: '電話',
        sort: true
    },{
        dataField: 'boardingTime',
        text: '乗車日時',
        sort: true
    },{
        dataField: 'boardingPlace',
        text: '乗車地点',
        sort: true
    },{
        dataField: 'destination',
        text: '降車地点',
        sort: true
    },{
        dataField: 'reservationStatus',
        text: 'ステータス',
        sort: true,
        sortValue: (cell)=>statusOrder.filter((x)=>(x.status === cell))[0].orderNo
    },{
        dataField: 'cancelButton',
        text: 'キャンセル',
        formatter: cancelButton
    }];  

    const statusOrder = [{orderNo: 1, status:'予約OK'}, {orderNo: 2, status:'予約NG'}, 
        {orderNo: 3, status:'予約確認中'}, {orderNo: 4, status:'予約取消'},
        {orderNo: 5, status:'乗車完了'}, {orderNo: 6, status:'未乗車'}];

    function cancelButton(cell, row) {
        if (row.reservationStatus === "予約確認中"　|| row.reservationStatus === "予約OK") {
          return (
            <Button variant="link" style={{padding:'0'}}>キャンセル</Button>
          );
        }
      
        return (
          <></>
        );
      }

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
      }];

    const expandRow = {
        renderer: row => (
            <div>
                <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
                <p>You can render anything here, also you can add additional data on every row object</p>
                <p>expandRow.renderer callback will pass the origin row object to you</p>
            </div>
        )
    };

  return (
    <SheetAreaLayout>
      <BootstrapTable 
        bootstrap4
        keyField='id' data={ resDataMap } columns={ columns } 
        noDataIndication="記録なし"
        headerWrapperClasses="theadStyle"
        pagination={ paginationFactory() }
        defaultSorted={ defaultSorted } 
        expandRow={ expandRow }
        striped hover
        // tabIndexCell
      />
    </SheetAreaLayout>
    )
}

export default TableNextContainer;