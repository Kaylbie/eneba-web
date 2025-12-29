import { useState } from "react"
import { Input } from "../ui/input";
import axios from "axios";

const Search = ({ setResults }) => {

    const [input, setInput] = useState("");
    
    const fetchData = (value: string) => {
        axios.get(`http://localhost:3000/list?search=${String(value).trim()}`).then((response) => {
            setResults(response.data)
        })
    }
    const handleChange = (value: string) => {
        if (value.trim().length > 2) {
            fetchData(value)
        } else {
            setResults([])
        }
        setInput(value)
    }
    return (
        <>
            <form className="w-full" action="/all" method="get">
                <Input className="border-none h-15 flex items-center w-full rounded-none border text-[1.2rem]! font-bold text-primary"
                placeholder="Search for games"
                value={input}
                name="text"
                onChange={(e) => handleChange(e.target.value)} 
                />
            </form>
            
        </>
    )
}
export default Search;