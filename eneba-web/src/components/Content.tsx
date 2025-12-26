import Product from "./Product";
import { useState } from "react";

const Content = () =>{
    const [searchResults, setSearchResults]=useState(12)

    return(
        <>
        <div className="flex mt-[30px] mb-[30px]">
            <span>Results found: </span>
            <span>{searchResults}</span>
        </div>
        <div>
            <Product
                title={"Split fiction"}
                image={"img url"}
                region={"GLOBAL"}
                price={"£32.44"}
                likes={"313"}
            />
        </div>
            

        </>
    )
};

export default Content;