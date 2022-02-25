import {
    request
} from "../Utils.js"



get_one.onsubmit = async (e) => {

    e.preventDefault();


    const id = post_id.value
    const url = `/posts/${id}`
    const response = await request(url)


    console.log('response :>> ', response);
    let text = ''
    Object.entries(response).forEach(item => text += `${item.join(': ')}<br>`)
    document.body.insertAdjacentHTML("beforeend", text)
}