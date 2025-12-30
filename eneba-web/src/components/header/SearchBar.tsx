import { useState } from "react"
import { Input } from "../ui/input";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import SearchResultsList from "./SearchResultsList";


const Search = () => {
    const [searchResults, setResults] = useState([]);
    const [input, setInput] = useState("");
    const isOpen = searchResults.length > 0

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

            {isOpen && (
                <div className="fixed inset-0 bg-black/60 z-40" onClick={() => setResults([])} />
            )}

            <div className="relative z-50 w-full">
                <form className="w-full flex items-center bg-background" action="/all" method="get">
                    <CiSearch className="size-9 ml-2" />
                    <Input className="border-none h-15 w-full text-[1.2rem]! font-bold" placeholder="Search for games"
                        value={input} autoComplete="off" name="text" onChange={(e) => handleChange(e.target.value)} />
                </form>

                {isOpen && (
                    <SearchResultsList searchResults={searchResults} />
                )}
            </div>
        </>
    )
}
export default Search;