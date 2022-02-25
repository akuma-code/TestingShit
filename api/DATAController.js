import {
    $req
} from "./client.js";

import HTMLService from "./HTMLService.js"
// import {
//     $request
// } from "../Utils.js";

class DataController {


    async updateList(outelem_id = "output") {
        const $out = document.getElementById(outelem_id);
        const dataList = await $req("/api").then(items => HTMLService.getList(items))
        $out.innerHTML = '';
        $out.insertAdjacentElement('afterbegin', dataList)

    }
    async delete(id) {
        await $req(`/api/${id}`, 'DELETE').then(items => HTMLService.getList(items))
    }
}

export default new DataController()