import axios from "axios"



export const fetchData = (value: string) => {
        axios.get(`http://localhost:3000/list?search=${String(value).trim()}`).then((response) => {
            return response.data
        })
}