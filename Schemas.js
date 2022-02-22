import mongoose from "mongoose"

const okSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    system: {
        type: String,
        required: true
    },
    glass: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
})

const dbItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        default: 5
    },
})

const dbSCHs = {
    ok: mongoose.model("Window", okSchema),
    dbItem: mongoose.model("dbItem", dbItemSchema),
}

export default dbSCHs