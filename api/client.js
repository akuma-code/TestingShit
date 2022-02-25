async function request(url, method = 'GET', data = null) {
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
    ELEM.forEach(e => {
        const {
            form
        } = e.dataset

        result[form] = e.value

    })

    return result
}

function render(data = [], id = "list") {
    console.count("rendered");
    const list = document.getElementById(id);
    list.innerHTML = ''
    const btn = document.createElement('button');
    btn.textContent = "DELETE"

    data.forEach(item => {
        list.insertAdjacentHTML("afterbegin", `<li>${item.name}: ${item.amount}, ${item.id} </li>`)
        btn.addEventListener("click", e => {
            removeItem(item.id)

        })
        list.insertAdjacentElement("beforeend", btn)
    })
}

async function removeItem(id) {
    const okna = await request("/api")
    await request(`/api/${id}`, 'delete');
    return okna
}

async function updateList() {
    const SKLAD = await request("/api")
        .then(render);
    return SKLAD
}

add_ok.onsubmit = async (e) => {
    e.preventDefault();


    const res = await request("/api", "POST", getData("[data-form]"))
        .then(render)


    return res
}

updateList()