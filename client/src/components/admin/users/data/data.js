import { useState, useEffect, useCallback } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

export const useFetch = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const token = localStorage.getItem("token")

    const getUsers = useCallback(async () => {
        try {
            setLoading(true)
            const { data } = await axios.get('http://localhost:3001/api/user', {
                headers: { token }
            })
            setUsers(data)
            setLoading(false)
        }
        catch (err) {
            setLoading(true)
            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: `${err.response && err.response.data ? err.response.data.message : err.message}`
            })
            setLoading(false)
        }
    }, [token])

    useEffect(() => {
        getUsers()
    }, [getUsers])

    return { loading, users }
}