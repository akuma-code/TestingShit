import express from "express";
import mongoose from "mongoose"
import router from "./router.js";
<<<<<<< HEAD
import Logger from "./Utils.js";
import dotenv from "dotenv"
dotenv.config()

=======
>>>>>>> 41e04ce93af319e17a9be33ddd2a03ddd327aca6

import {
    Logger,
    __dirname
} from "./Utils.js";

import dotenv from "dotenv";
dotenv.config()



<<<<<<< HEAD
const PORT = process.env.PORT;
const DB_URL = `mongodb+srv://akuma:darks1de@cluster0.lu3wt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
=======

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
>>>>>>> 41e04ce93af319e17a9be33ddd2a03ddd327aca6


const app = express();
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
<<<<<<< HEAD
// app.use(express.static(`${__dirname}/posts`));
=======
// app.use(express.static("/posts"));
>>>>>>> 41e04ce93af319e17a9be33ddd2a03ddd327aca6
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