import React from 'react'
import './pagination.scss'

import arrow from '../../../assets/img/arrow.png'

export const Pagination = ({page, increment, decrement, lastPage}) => {
    const prevPage = () => {
        if(page>1){
            decrement()
        }
    }

    const nextPage = () => {
        if(page<lastPage){
            increment()
        }
    }

  return (
    <div className='pagination-container'>
            <button className={page === 1 ? 'disable' : ''} onClick={prevPage}> 
                <img src={arrow} alt="arrow"/> 
            </button>
            <div className="page">Page <span className='page-color'>{page} of {lastPage}</span></div>
            <button className={page === lastPage ? 'disable' : ''} onClick={nextPage}> 
                <img src={arrow} alt="arrow"/> 
            </button>
      
    </div>
  )
}
