btn_sub.onsubmit = (e) => {
    e.preventDefault()


    const body = {
        post_name: author.value,
        post_title: title.value,
        post_content: content.value
    }

    const form = new FormData(body);
    console.log('body :>> ', body);
    console.log('form :>> ', form);
}