btn_sub.onsubmit = async (e) => {
    // e.preventDefault()


    const body = {
        author: author.value,
        title: title.value,
        content: content.value
    }
    // const resp = await simpleFetch.post("/posts", body)
    // console.log('resp :>> ', resp);
    // return resp
}

getbyid.onsubmit = async (e) => {
    e.preventDefault()
    const target = e.target;
    console.log('target :>> ', {
        target
    });

    const id = post_id.value
    const body = {
        id: id
    }

    // const response = await simpleFetch.post("/posts/:id", body)
    console.log('body :>> ', body);
    // const data = new FormData(get_one);

    // console.log('data :>> ', data);
    console.log('id :>> ', id);
    return response


}