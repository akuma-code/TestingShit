import dbSCHs from "../Schemas.js"

const okno = dbSCHs.ok
const {
    dbItem
} = dbSCHs

class OknaService {
    async add(data) {
        try {
            const newItem = await okno.create({
                ...data
            })

            return newItem
        } catch (error) {
            console.warn(error.message)
        }
    }

    async getList() {
        const wins = await okno.find()
        const jw = JSON.parse(wins)
        console.log('jw :>> ', jw);
        return wins
    }

    async getOne(id) {
        if (!id) {
            throw new Error("NO ID")
        }
        const win = await okno.findById(id)
        return win
    }
}

export default new OknaService()