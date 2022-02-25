// btn_sub.onsubmit = async (e) => {
//     // e.preventDefault()




//     const body = {
//         author: author.value,
//         title: title.value,
//         content: content.value
//     }
//     // const resp = await simpleFetch.post("/posts", body)
//     // console.log('resp :>> ', resp);
//     // return resp
// }

get_one.onsubmit = async (e) => {
    e.preventDefault()
    const form = document.querySelector("#get_one")
    let elem = new FormData(form)
    const id = post_id.value
    const url = `/posts/${id}`
    const response = await fetch(url, {
        method: "get"
    })
    // debugger
    const result = await response.json()

    console.log('result :>> ', result);
    let text = ''
    Object.entries(result).forEach(item => text += `${item.join(': ')}<br>`)
    // let text = `<b>${Object.entries(result).join(';')}</b><br>`
    document.body.insertAdjacentHTML("beforeend", text)
}