import express from 'express'
import {getGames, postGame} from './src/controller.ts'
import { json } from 'node:stream/consumers';


const eneba = express();
const port = 3000;

eneba.use(express.json())

eneba.get("/list", getGames);
eneba.post("/game/insert", postGame);



eneba.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});