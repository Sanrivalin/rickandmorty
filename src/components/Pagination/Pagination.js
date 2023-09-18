import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber,setPageNumber }) => {   
  return <ReactPaginate
   className='pagination justify-content-center gap-4 my-4'
   forcePage={pageNumber ===1 ? 0:pageNumber -1} 
   nextLabel='Next' 
   previousLabel='Prev'  
   nextClassName= 'btn btn-info'
   previousClassName='btn btn-info'
   pageClassName='page-item'
   pageLinkClassName='page-link'
   onPageChange={(data) =>
    setPageNumber(data.selected + 1
      )}
   activeClassName='active'
   pageCount={info?.pages}   
  />;  
};

export default Pagination
