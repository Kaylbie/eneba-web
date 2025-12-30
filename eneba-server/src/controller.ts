import express from 'express'
import { prisma } from './lib/prisma'


export const postGame = async(req:express.Request, res:express.Response)=>{
    try{
        const {gameName, title, imageSrc, region, price, discount, likes, isAvailable, platform} = req.body

        const game = await prisma.game.create({
            data:{
                gameName,
                title,
                imageSrc,
                region,
                price,
                discount,
                likes,
                isAvailable,
                platform
            },
        })
        res.status(201).json(game)
    }
    catch(error){
        console.error(error)
        res.status(500).json({error:"Failed to create game"})
    }
    
}

export const getGames = async(req:express.Request, res:express.Response)=>{
    try{
        const{search}=req.query
        if(!search){
            const games=await prisma.game.findMany({})
            res.json(games)
        }
        else{
            const games = await prisma.$queryRaw` SELECT *, word_similarity(${search}, title) AS score FROM "Game" WHERE ${search} <% title ORDER BY ${search} <<-> title LIMIT 10;`;
            res.json(games)
        }
        
    }
    catch(error){
        res.status(500).json({error:"Error"})
        console.log(error)
    }

    
}