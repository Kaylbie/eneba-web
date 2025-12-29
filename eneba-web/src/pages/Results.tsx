import Product from "../components/gameCard/Product";
import { useState, useEffect } from "react";
import axios from "axios";
import {useSearchParams} from "react-router"

const Content = () => {
    type Game = {
        id: number,
        gameName:string,
        title: string,
        imageSrc: string,
        region: string,
        price: number,
        discount:number,
        likes: number,
        isAvailable: boolean,
        platform: string
    }
    const [searchParams, setSearchParams] = useSearchParams();

    const [searchResultsNumber, setSearchResults] = useState(0)
    const [games, setGames] = useState<Game[]>([]);
    
    useEffect(() => {
        axios.get(`http://localhost:3000/list?search=${searchParams.get("text")}`).then((response) => {
            setGames(response.data);
            setSearchResults(response.data.length)
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div className="flex mt-[30px] mb-[30px]">
                <span className="font-normal">Results found:&nbsp;</span>
                <span className="font-bold">{searchResultsNumber}</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {games.map((game) => (
                    <Product
                        gameName={game.gameName}
                        title={game.title}
                        image={game.imageSrc}
                        region={game.region}
                        price={game.price}
                        discount={game.discount}
                        platform={game.platform}
                        likes={game.likes}
                    />
                ))}

            </div>


        </>
    )
};

export default Content;