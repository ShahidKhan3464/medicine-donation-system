import React from 'react'

const Pagination = ({ usersPerPage, totalUsers, prevPage, nextPage, paginate, page }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div className="Pagination">
            <div className='btn-container'>
                <button className='prev-btn' onClick={prevPage}>prev</button>
                {pageNumbers.map((number, index) => {
                    return (
                        <button
                            key={index}
                            className={`page-btn ${index + 1 === page ? 'active-btn' : null}`}
                            onClick={() => paginate(number)}
                        >
                            {number}
                        </button>
                    )
                })}
                <button className='next-btn' onClick={nextPage}>next</button>
            </div>
        </div>
    )
}

export default Pagination