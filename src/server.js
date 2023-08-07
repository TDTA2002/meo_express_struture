/* Kích hoạt .env */
import dotenv from "dotenv"
dotenv.config()

/* Tạo server */
import express from "express";
const server = express()


/* Body parser */
import bodyParser from 'body-parser';
server.use(bodyParser.json()); // support encoded bodies

/* Setup Views */
import viewConfig from './views';
server.use("/views", viewConfig);

import cors from 'cors';
server.use(cors());

/* Setup Api */
import apiConfig from './routes';
server.use("/apis", apiConfig);


server.listen(process.env.SERVER_PORT, () => {
    console.log(`Server đã chạy tại: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
})

    