import express from "express";
import mongoose from "mongoose"
import router from "./router.js";

import {
    Logger,
    __dirname
} from "./Utils.js";

import dotenv from "dotenv";
dotenv.config()




const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;


const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
// app.use(express.static("/posts"));
app.use(express.urlencoded({
    extended: true
}))

app.use(router);
app.use(Logger)



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

startApp()