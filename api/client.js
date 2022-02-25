import HTMLService from "./HTMLService.js"
import DataController from "./DATAController.js"
import DATAController from "./DATAController.js"



export async function $req(url, method = 'GET', data = null) {
    try {
        const headers = {}
        let body

        if (data) {
            headers['Content-Type'] = 'application/json'
            body = JSON.stringify(data)
        }

        const response = await fetch(url, {
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
    // const btn = document.createElement('button');
    // btn.textContent = "DELETE"

    // data.forEach(item => {
    //     list.insertAdjacentHTML("afterbegin", `<li>${item.name}: ${item.amount}, ${item.id} </li>`)
    //     btn.addEventListener("click", e => {
    //         removeItem(item.id)

    //     })
    //     list.insertAdjacentElement("beforeend", btn)
    // })
    list.insertAdjacentElement("afterbegin", ListElem)
}

async function removeItem(id) {
    const okna = await $req("/api")
    await $req(`/api/${id}`, 'delete');
    return okna
}

async function updateList() {
    const SKLAD = await $req("/api")
        .then(render);
    return SKLAD
}

add_ok.onsubmit = async (e) => {
    e.preventDefault();


    const res = await $req("/api", "POST", getData("[data-form]"))
    DataController.updateList()

    // const updatedData = await request("/api")

    return res
}

DATAController.updateList()