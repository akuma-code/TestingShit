import {
    $req
} from "./client.js";

import ItemCardService from "./ItemCardService.js"


class DataController {
    async getAll() {
        const data = await $req("/api")
        return data
    }

    async updateList(outelem_id = "output") {
        const $out = document.getElementById(outelem_id);
        const dataList = await this.getAll().then(items => ItemCardService.getList(items))
        $out.innerHTML = '';
        $out.insertAdjacentElement('beforeend', dataList)

    }
    async delete(id) {
        await $req(`/api/${id}`, 'DELETE').then(items => ItemCardService.getList(items))
    }
}

export default new DataController()