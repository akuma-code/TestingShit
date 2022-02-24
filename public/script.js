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
    // e.preventDefault()
    const response = await fetch(`posts/${post_id.value}`)
    console.log('response :>> ', response);

    // return response
}