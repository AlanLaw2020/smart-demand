import React, {Component} from 'react'
import {Pagination} from 'react-bootstrap'

class PaginationBar extends Component{

    constructor(props) {
        super()
        this.state = {

        }
    }

    render(){

        let active = 1;
        let items = [];
        for (let number = 1; number <= 5; number++) {
          items.push(
            <Pagination.Item key={number} active={number === active}>
              {number}
            </Pagination.Item>,
          );
        }
        
        //without 'auto' setting, pagination will always have a ugly button margin.
        const paginationBasic = (
            <Pagination style = {{marginBottom: 'auto'}}>
              <Pagination.First/>
              <Pagination.Prev/>
              {items}
              <Pagination.Next/>
              <Pagination.Last/>
            </Pagination>
        );

        return (
            paginationBasic
        );
      }
}

export default PaginationBar;