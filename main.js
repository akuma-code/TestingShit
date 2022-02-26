import express from "express";
import mongoose from "mongoose"
import router from "./router.js";


import {
    Logger,
    __dirname
} from "./utils.js";

import dotenv from "dotenv";
import apiRouter from "./apiRouter.js";
dotenv.config()



const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;


const app = express();
app.use(express.static(`${__dirname}/api`));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(Logger)
app.use(apiRouter)
app.use("/posts", router)



async function startApp() {
    try {
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (error) {
        console.log(error)
    }
}

async function start() {
    app.listen(PORT, () => {
        console.count("Server started times")
    })
}

start()