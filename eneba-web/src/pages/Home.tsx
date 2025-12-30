import { useState, useEffect } from 'react'
import axios from 'axios'
import Product from '@/components/gameCard/Product'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


function Home() {
    type Game = {
        id: number,
        title: string,
        imageSrc: string,
        region: string,
        price: number,
        discount: number,
        likes: number,
        isAvailable: boolean,
        platform: string
    }

    const [games, setGames] = useState<Game[]>([]);
    const shuffle = <T,>(array: T[]): T[] => {
        const copy = [...array]
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
                ;[copy[i], copy[j]] = [copy[j], copy[i]]
        }
        return copy
    }

    useEffect(() => {
        axios.get(`http://localhost:3000/list`).then((response) => {
            setGames(shuffle(response.data));
        })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <>
            <div>
                <h1 className="text-[1.7rem] font-semibold pb-[30px] pt-[10px]">Top games</h1>
            </div>
            <div className="w-full">
                <Carousel className="w-full">
                    <CarouselContent className="">
                        {games.map((game) => (
                            <CarouselItem className="pl-4 basis-1/4">
                                <div className="p-1">
                                    <Product
                                        title={game.title}
                                        image={game.imageSrc}
                                        region={game.region}
                                        price={game.price}
                                        discount={game.discount}
                                        platform={game.platform}
                                        likes={game.likes} />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    )
}

export default Home
