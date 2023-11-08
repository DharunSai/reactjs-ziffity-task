import React from 'react'
import  "./Pagination.css"
import { Button } from 'reactstrap';

const Pagination = ({start,end,currentPage,setPagination}) => {

    
    
  return (
    <div className='pagination'>
      {
        [...Array(end - start + 1).keys()].map((i,key) => <Button key={key} onClick={()=>setPagination(i+1)}className='pagination-elements'>{i+1}</Button>)
      }
    </div>
  )
}

export default Pagination
