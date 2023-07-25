/* Kích hoạt .env */
import dotenv from "dotenv"
dotenv.config()

/* Tạo server */
import express from "express";
const server = express()

server.listen(process.env.SERVER_PORT, () =>{
    console.log(`Server đã được chạy tại: ${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})