import logo from "../assets/logo.svg"
import {Link} from "react-router"
import { HeartIcon } from "./icons/akar-icons-heart"
import lt_icon from "../assets/lt_icon.png"
import {
  Command,
  CommandInput,
} from "@/components/ui/command"
import {Button} from "@/components/ui/button"
import { CartIcon } from "./icons/akar-icons-cart"
import { PersonIcon } from "./icons/akar-icons-person"

const Header = ()=>{

    return(
        
        <header className="w-full bg-[#4618ac] h-24">
            <div className="h-full max-w-310 mx-auto flex items-center">

                <div className="mr-5 shrink-0">
                    <Link to="/">
                        <img src={logo} className="h-13"/>
                    </Link>    
                </div>
            
                <div className="flex min-w-[45%] mr-5">
                    <Command
                        className="w-full rounded-none border bg-background"
                        shouldFilter={false}
                    >
                  <CommandInput
                    placeholder="Search for games"
                    //  defaultValue={userInput}
                    //  onValueChange={(v) => handleUserInput(v)}
                    className="text-[1.2rem] font-bold text-primary"
                  />

                  {/* <CommandList>
                     <CommandEmpty>No results found.</CommandEmpty>
                     <CommandGroup>
                        {predictions.map((prediction) => (
                           <CommandItem
                              key={prediction.placePrediction?.placeId}
                              value={prediction.placePrediction?.placeId}
                              onSelect={(value) => handleSelectedPlace(value)}
                           >
                              {prediction.placePrediction?.text.text}
                           </CommandItem>
                        ))}
                     </CommandGroup>
                     <CommandSeparator />
                  </CommandList> */}
                    </Command>
                </div>
                <div>
                    <Button variant="outline" size="sm" className="border-none shadow-none hover:bg-transparent hover:text-[#fad318] cursor-pointer m-0">
                        <img src={lt_icon} className="size-4"/>
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
                        <HeartIcon className="size-6"/>
                    </Button>
                </div>
                <div>
                    <Button variant="outline" size="icon" className="border-none shadow-none hover:bg-transparent hover:text-[#fad318] cursor-pointer">
                        <CartIcon className="size-6"/>
                    </Button>
                </div>
                <div className="flex items-center text-xs">
                    <div>
                        <Button variant="outline" size="sm" className="p-0 border-none shadow-none hover:bg-transparent hover:text-[#fad318] cursor-pointer">
                            <PersonIcon className="size-6"/>Log in
                        </Button>
                    </div>
                    <span> | </span>
                    <div>
                        <Button variant="outline" size="sm" className="border-none shadow-none hover:bg-transparent hover:text-[#fad318] cursor-pointer">
                            Register
                        </Button>
                    </div>
                </div>
                </div>
                
                
            </div>

        </header>
    )
};

export default Header;