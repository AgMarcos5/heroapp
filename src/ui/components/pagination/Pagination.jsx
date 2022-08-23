import React from 'react'

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
    <>
            <button className={page === 1 ? 'disable' : ''} onClick={prevPage}> izq </button>
            <div className="page">Page <span className='page_color'>{page} of {lastPage}</span></div>
            <button className={page === lastPage ? 'disable' : ''} onClick={nextPage}> der </button>
      
    </>
  )
}
