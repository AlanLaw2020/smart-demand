import React from 'react';
import {Pagination} from 'react-bootstrap';

const PaginationBar = ({ postsPerPage, totalPosts, activePage, paginate }) => {
  
  const pageNumbers = [];
  let active = activePage;
  let items = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  for (let number = 1; number <= pageNumbers.length; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => paginate(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  //without 'auto' setting, pagination will always have a ugly button margin.
  const paginationBasic = (
    <Pagination style = {{marginBottom: 'auto'}}>
      <Pagination.First onClick={() => paginate(1)}/>
      <Pagination.Prev onClick={() => paginate(active>1 ? active-1 : active)}/>
      {items}
      <Pagination.Next onClick={() => paginate(active<pageNumbers.length ? active+1 : active)}/>
      <Pagination.Last onClick={() => paginate(pageNumbers.length)}/>
    </Pagination>
  );

  return (
    paginationBasic
  );

};

export default PaginationBar;
