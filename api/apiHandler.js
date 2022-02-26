import {
    v4
} from "uuid"

let DB = [{
        id: v4(),
        name: "OKNO_01",
        amount: 5
    },
    {
        id: v4(),
        name: "OKNO_02",
        amount: 5
    },
    {
        id: v4(),
        name: "OKNO_03",
        amount: 5
    }
]



class apiHandler {
    async getAll(req, res) {
        try {
            console.log("getAll: ", DB.length);
            return res.status(200).json(DB)
        } catch (e) {
            console.warn(e)
        }
    }

    async getOne(req, res) {
        try {
            const thisOne = DB.filter(i => i.id === req.params.id)
            return res.json(thisOne)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    async delete(req, res) {
        const id = req.params.id

        try {
            DB = DB.filter(o => o.id !== id)
            return res.status(200).json(DB)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    async addOne(req, res) {
        let newItem;
        try {
            newItem = {
                ...req.body,
                id: v4()
            }
            DB.push(newItem);
            console.log('added :>> ', newItem);
            return res.status(200).json(DB)
        } catch (e) {
            console.warn(e)
        }
    }

}

export default new apiHandler()