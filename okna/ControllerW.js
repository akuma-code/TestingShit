import oknaService from "./oknaService.js";

class okCTRL {
    async add(req, res) {
        try {
            const {
                name,
                system,
                price,
                glass
            } = await req.body
            const newWin = await oknaService.add(req.body)
            res.redirect("/okHTML")

        } catch (e) {
            console.log('e :>> ', e.message);
        }
    }

    async getList(req, res) {
        try {
            const okna = await oknaService.getList()
            console.log('okna :>> ', okna.length);
            document.querySelector("#oklist").insertAdjacentText("afterbegin", "aaaaa")
            return okna
        } catch (e) {

        }
    }
}

export default new okCTRL()