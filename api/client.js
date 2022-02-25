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
    console.log(result);
    return result
}

function render(data = [], id = "list") {
    const list = document.getElementById(id);
    list.innerHTML = ''
    data.forEach(item => {
        list.insertAdjacentHTML("afterbegin", `<li>${item.name}: ${item.amount}</li>`)

    })
}
add_ok.onsubmit = async (e) => {
    e.preventDefault();


    const res = await request("/api", "POST", getData("[data-form]")).then(render)
    // render(res)
    return res
}

async function init() {
    console.log("INIT");
    const SKLAD = await request("/api");
    render(SKLAD)
    console.log('SKLAD :>> ', SKLAD);
}

init()