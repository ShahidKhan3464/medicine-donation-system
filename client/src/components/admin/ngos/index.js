import { useState } from 'react'
import DisplayNgo from './displayNgos/DisplayNgos'
import Pagination from './pagination/Pagination'
import Loader from '../../loader/Loader'
import { useFetch } from './data/data'

const Index = () => {
    const { loading, ngos } = useFetch()
    const [currentPage, setCurrentPage] = useState(1)
    const [ngosPerPage] = useState(5)

    const pagesVisited = currentPage * ngosPerPage
    const start = pagesVisited - ngosPerPage
    const currentNgos = ngos.slice(start, pagesVisited)
    const paginate = (number) => setCurrentPage(number)

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(ngos.length / ngosPerPage)) setCurrentPage(currentPage + 1)
    }

    return (
        <div className='Ngos'>
            <h3>View Ngos</h3>
            {loading
                ? <Loader />
                : <>
                    <DisplayNgo ngos={currentNgos} />
                    <Pagination
                        ngosPerPage={ngosPerPage}
                        totalNgos={ngos.length}
                        prevPage={prevPage}
                        nextPage={nextPage}
                        paginate={paginate}
                        page={currentPage}
                    />
                </>
            }
        </div>
    )
}

export default Index