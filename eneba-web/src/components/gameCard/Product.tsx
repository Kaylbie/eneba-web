import { HeartIcon } from "../icons/akar-icons-heart";
import cashback_icon from "../../assets/cashback_icon.png"
import GamePlatform from "./GamePlatform";


interface ProductProps {
    title: string,
    image: string,
    region: string,
    price: number,
    discount:number,
    likes: number,
    platform: string
}


const Product = ({
    title,
    image,
    region,
    price,
    discount,
    likes,
    platform
}: ProductProps) => {
    const cashBack=price*0.11;
    const discountPrice = price*(1-(discount/100))
    
    return (
        <>
            <a href="/">
                <div className="min-w-50 max-w-75 bg-[#1f0a4d] text-[0.8rem] border-[#63e3c2] border cursor-pointer">
                    <div className="relative">
                        <div className="h-90 w-full">

                            <img src={image} className="h-full w-full object-cover object-top" />

                        </div>
                        <div className="p-1 flex absolute bottom-7 justify-start items-start bg-[#63e3c2] text-black font-bold text-[0.7rem]">
                            <img src={cashback_icon} className="size-4 mr-1" />
                            <span>CASHBACK</span>
                        </div>
                        <div className="p-0.5 flex absolute bottom-0 backdrop-blur-[5px] w-full justify-center items-center backdrop-brightness-50">
                            <GamePlatform platform={platform} />
                        </div>
                    </div>
                    <div className="leading-none font-medium text-[0.8rem]">

                        <div className="p-[15px]">
                            <div>
                                <div className="min-h-[2rem] line-clamp-2 mb-[8px] leading-4">{title}</div>
                                <div className="text-[#23c299]">{String(region).toUpperCase()}</div>
                            </div>
                        </div>
                        <div className="p-[15px] pt-0 font-bold">
                            <div>
                                <div className="text-[#b3aac9] flex">
                                    <span>From&nbsp;</span>
                                    {discount!=0 && (
                                        <div>

                                        <span className="line-through">€{Number(price).toFixed(2)}</span>
                                        <span className="text-[#84e916]">&nbsp;-{discount}%</span>
                                        </div>
                                    )}
                                    
                                </div>
                                <div className="text-[1.4rem] leading-8 flex">
                                    {discount!=0 && (
                                        <span >€{Number(discountPrice).toFixed(2)}</span>
                                    )}
                                    {discount==0 && (
                                        <span>€{Number(price).toFixed(2)}</span>
                                    )}
                                    
                                </div>
                                <div className="text-[#84e916]">
                                    <span>Cashback: €{cashBack.toFixed(2)}</span>
                                </div>
                                
                            </div>
                            <div className="flex mt-[10px] items-center gap-1 text-[#b3aac9]">
                                <HeartIcon size={20} />
                                <span>{likes}</span>
                            </div>


                        </div>
                    </div>

                </div>
            </a>

        </>
    )
};
export default Product;