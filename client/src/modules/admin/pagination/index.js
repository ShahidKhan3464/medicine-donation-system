import React from 'react';
import { Pagination } from './style'

const Index = ({ itemsPerPage, totalItems, prevPage, nextPage, paginate, page }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Pagination>
            <div className='pagination_container'>
                <button className='prev-btn' onClick={prevPage}>prev</button>
                {pageNumbers.map((number, index) => {
                    return (
                        <button
                            key={index}
                            onClick={() => paginate(number)}
                            className={`page-btn ${index + 1 === page ? 'active-btn' : null}`}
                        >
                            {number}
                        </button>
                    )
                })}
                <button className='next-btn' onClick={nextPage}>next</button>
            </div>
        </Pagination>
    )
}

export default Index