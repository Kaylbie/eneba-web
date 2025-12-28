
import { Button } from "./ui/button"
import split_fiction from "../assets/sf_item.jpg"
interface SearchListItemProps{
    title:string,
    image:string,
    price:number
}

const SearchListItem = ({
    title,
    image,
    price
}:SearchListItemProps)=>{
    return(
        <>
            <div className="group pt-1.25 pb-1.25 pl-5 flex mt-2 mb-2 relative">
                <div className="pointer-events-none absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"/>
                <a href="#" className="relative overflow-hidden flex w-full justify-between">
                    <div className="flex">
                        <img src={split_fiction} className="max-h-[102px] transition-opacity duration-200 group-hover:opacity-50"/>
                        <div className="pl-[15px] flex-col flex items-start">
                            <span className="border rounded-2xl text-xs p-0.5 pl-2 pr-2 font-light text-[#23c299] border-[#23c299] mb-2.5 bg-background">Digital good</span>
                            <span className="font-semibold text-[0.9rem]">{title}</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-col pr-5 pl-2.5 h-full">
                        <div className="flex flex-col justify-center h-full mb-1.25 items-end">
                            <div className="text-xs text-[#b3aac9]">From</div>
                            <span className="font-extrabold">€{price}</span>
                        </div>
                    </div>
                    

                </a>

            </div>
        
        </>
    )

}
export default SearchListItem;