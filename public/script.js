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
    const form = document.querySelector("#get_one")
    const data = new FormData(e.target);

    console.log('id :>> ',
        post_id.value
    );
    return post_id.value
}