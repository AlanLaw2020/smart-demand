import React, {useState, useEffect} from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import resDataMap from './resDataMap'
import SheetAreaLayout from './Depricated/SheetAreaLayout'
import paginationFactory from 'react-bootstrap-table2-paginator'
import {Button} from  'react-bootstrap';
import './tableNext.css'
import ReservationDetail from './ReservationDetail'
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'

function TableNextContainer(){

    const columns = [
        {
            dataField: 'id',
            text: '予約ID',
            sort: true
        }, 
        // {
        //     dataField: 'reservationId',
        //     text: '予約ID',
        //     sort: true
        // }, 
        // {
        //     dataField: 'reservationTime',
        //     text: '予約日時',
        //     sort: true
        // },
        // {
        //     dataField: 'passengerName',
        //     text: '乗車者',
        //     sort: true
        // },
        // {
        //     dataField: 'contact',
        //     text: '電話',
        //     sort: true
        // },
        {
            dataField: 'date',
            text: '乗車日付',
            sort: true
        },
        {
            dataField: 'pickup_time',
            text: '乗車時間',
            sort: false
        },
        {
            dataField: 'boardingPlace',
            text: 'お迎え地',
            sort: true
        },
        {
            dataField: 'destination',
            text: 'お届け地',
            sort: true
        },
        {
            dataField: 'passengerCount',
            text: '人数',
            sort: true
        },
        {
            dataField: 'reservationStatus',
            text: 'ステータス',
            sort: true,
            sortValue: (cell)=>statusOrder.filter((x)=>(x.status === cell))[0].orderNo
        },
        {
            dataField: 'cancelButton',
            text: 'キャンセル',
            formatter: cancelButton
        }
    ];  

    const statusOrder = [{orderNo: 1, status:'OK'}, {orderNo: 2, status:'NG'}, 
        {orderNo: 3, status:'確認中'}, {orderNo: 4, status:'予約取消'},
        {orderNo: 5, status:'乗車完了'}, {orderNo: 6, status:'未乗車'}];

    function cancelButton(cell, row) {
        if (row.reservationStatus === "確認中"　|| row.reservationStatus === "OK") {
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
            <>
                <ReservationDetail row={row}/>
                {/* <div>
                    <p>{ `This Expand row is belong to rowKey ${row.id}` }</p>
                </div> */}
            </>
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