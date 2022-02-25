import express from "express";
import mongoose from "mongoose"
import router from "./router.js";
import {
    v4
} from "uuid";

import {
    Logger,
    __dirname
} from "./Utils.js";

import dotenv from "dotenv";
dotenv.config()



export let SKLAD_GP = [{
    id: v4(),
    name: "OKNO_01",
    amount: 5
}]
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;


const app = express();
app.use(express.json());
// app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/api`));
// app.use(express.static("/posts"));
app.use(express.urlencoded({
    extended: true
}))
app.use(Logger)

// app.use(router);
//*GET ALL
app.get("/api", async (req, res) => {

    console.log('Sklad Positions :>> ', SKLAD_GP.length);
    res.status(200).json(SKLAD_GP)
})
//*Add new
app.post("/api", (req, res) => {
    const newok = {
        ...req.body,
        id: v4()
    }
    SKLAD_GP.push(newok);
    console.log('added :>> ', newok);
    res.status(200).json(SKLAD_GP)
})
//*Delete
app.delete("/api/:id", (req, res) => {

    SKLAD_GP = SKLAD_GP.filter(o => o.id !== req.params.id)
    res.status(200).json({
        message: `Position  removed`
    })
})
//**
// app.get("*", (req, res) => {
//     console.log('SKLAD_GP :>> ', SKLAD_GP[0]);
//     res.sendFile(`${__dirname}/api/index.html`, (e) => console.log(e.message))
// })






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