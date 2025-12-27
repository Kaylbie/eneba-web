import express from 'express'
import {getGames, postGame} from './src/controller.ts'
import cors from 'cors'

const eneba = express();
const port = 3000;

const options = {
    origin: 'http://localhost:5173',
};

eneba.use(cors(options));

eneba.use(express.json())

eneba.get("/list", getGames);
eneba.post("/game/insert", postGame);



eneba.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});