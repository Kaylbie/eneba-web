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
            const games = await prisma.$queryRaw`SELECT * FROM "Game" WHERE SIMILARITY("gameName", ${search}) > 0.2;`;
            res.json(games)
        }
        
    }
    catch(error){
        res.status(500).json({error:"Error"})
        console.log(error)
    }

    
}