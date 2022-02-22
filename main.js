import express from "express";
import mongoose from "mongoose"
import router from "./router.js";
import Logger from "./Utils.js";

import {
    dirname
} from 'path'
import {
    fileURLToPath
} from 'url'
const __dirname = dirname(fileURLToPath(
    import.meta.url))

const PORT = 3000;
const DB_URL = `mongodb+srv://akuma:darks1de@cluster0.lu3wt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.static("posts"));
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