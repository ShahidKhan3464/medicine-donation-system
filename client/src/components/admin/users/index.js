import { useState } from 'react'
import DisplayUsers from './displayUsers/DisplayUsers'
import Pagination from './pagination/Pagination'
import Loader from '../../loader'
import { useFetch } from './data/data'

const Index = () => {
    const { loading, users } = useFetch()
    const [usersPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    const pagesVisited = currentPage * usersPerPage
    const start = pagesVisited - usersPerPage
    const currentUsers = users.slice(start, pagesVisited)
    const paginate = (number) => setCurrentPage(number)

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1)
    }

    const nextPage = () => {
        if (currentPage < Math.ceil(users.length / usersPerPage)) setCurrentPage(currentPage + 1)
    }

    return (
        <div className='Users'>
            <h3>View Users</h3>
            {loading
                ? <Loader />
                : <>
                    <DisplayUsers users={currentUsers} />
                    <Pagination
                        usersPerPage={usersPerPage}
                        totalUsers={users.length}
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