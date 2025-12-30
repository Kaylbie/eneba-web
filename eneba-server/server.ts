import express from 'express'
import {getGames, postGame} from './src/controller'
import cors from 'cors'

const eneba = express();
const port = 3000;

const options = {
  origin: ['http://localhost:5173', 'http://localhost', 'https://fortas.app'],
};

eneba.use(cors(options));

eneba.use(express.json())

eneba.get("/api/list", getGames);
eneba.post("/api/game/insert", postGame);



eneba.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});