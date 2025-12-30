import logo from "../../assets/logo.svg"
import { Link } from "react-router"
import { HeartIcon } from "../icons/akar-icons-heart"
import lt_icon from "../../assets/lt_icon.png"
import Search from "./SearchBar"
import { Button } from "@/components/ui/button"
import { CartIcon } from "../icons/akar-icons-cart"
import eneba_icon  from "../../assets/eneba_icon.png"


const Header = () => {
    
    return (

        <header className="w-full bg-[#4618ac] h-24">
            <div className="h-full max-w-270 mx-auto flex items-center">

                <div className="mr-5 shrink-0">
                    <Link to="/">
                        <img src={logo} className="h-13" />
                    </Link>
                </div>
                <div className="min-w-[50%]">
                    <div className="relative mr-5 border">
                        <Search/>

                    </div>

                </div>

                <div>
                    <Button variant="outline" size="sm" className="border-none shadow-none hover:bg-transparent hover:text-[#fad318] cursor-pointer m-0">
                        <img src={lt_icon} className="size-4" />
                        <div className="flex gap-1.5 text-2xs font-light">
                            <span>English EU</span>
                            <span>|</span>
                            <span>EUR</span>
                        </div>

                    </Button>
                </div>
                <div className="w-full flex items-center justify-end font-light">

                    <div >
                        <Button variant="outline" className="border-none shadow-none hover:bg-transparent hover:text-[#fad318] cursor-pointer">
                            <HeartIcon className="size-6" />
                        </Button>
                    </div>
                    <div>
                        <Button variant="outline" size="icon" className="border-none shadow-none hover:bg-transparent hover:text-[#fad318] cursor-pointer">
                            <CartIcon className="size-6" />
                        </Button>
                    </div>
                    <div className="flex items-center text-xs">
                        <div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="ml-3 border rounded-full shadow-none hover:bg-transparent hover:text-[#fad318] cursor-pointer">
                                <img src={eneba_icon} className="size-7 rounded-full" />
                            </Button>
                        </div>
                    </div>
                </div>


            </div>

        </header>
    )
};

export default Header;