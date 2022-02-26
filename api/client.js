import DataController from "./DATAController.js"
import HTMLService from "./HTMLService.js"
import ItemCardService from "./ItemCardService.js"



export async function $req(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body

        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        let response = await fetch(url, {
            method,
            headers,
            body
        })
        return await response.json()
    } catch (e) {
        console.warn('Error:', e.message)
    }
}





function getData(selector) {
    const ELEM = document.querySelectorAll(`${selector}`);
    let result = {};
    ELEM.forEach(input => {
        const {
            form
        } = input.dataset

        result[form] = input.value

    })

    return result
}

function render(ListElem, id = "output") {
    console.count("rendered");
    const list = document.getElementById(id);
    list.innerHTML = ''
    list.insertAdjacentElement("beforeend", ListElem)
}

async function removeItem(id) {
    const item = await $req("/api")
    await $req(`/api/${id}`, 'delete');
    return item
}

async function updateList() {
    const SKLAD = await $req("/api")
        .then(render);
    return SKLAD
}

add_ok.onsubmit = async (e) => {
    e.preventDefault();


    const res = await $req("/api", "POST", getData("[data-form]"))
    const _dbItems = await $req("/api");
    const UL = await ItemCardService.getList(_dbItems)
    HTMLService.update(UL)

}

window.addEventListener("load", DataController.updateList())