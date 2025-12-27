import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios";

const Content = () =>{
    type Game={
        id:number,
        title:string,
        imageSrc:string,
        region:string,
        price:number,
        likes:number,
        isAvailable:boolean,
        platform:string
    }
    const [searchResults, setSearchResults]=useState([])
    const [games, setGames]=useState<Game[]>([]);

    useEffect(()=>{
        axios.get('http://localhost:3000/list').then((response)=>{
            setGames(response.data);
            setSearchResults(response.data.length)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    return(
        <>
        <div className="flex mt-[30px] mb-[30px]">
            <span>Results found: </span>
            <span>{searchResults}</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
                    <Product
                        title={game.title}
                        image={game.imageSrc}
                        region={game.region}
                        price={game.price}
                        platform={game.platform}
                        likes={game.likes}
                    />
                ))}
            
        </div>
            

        </>
    )
};

export default Content;