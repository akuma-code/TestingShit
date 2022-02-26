class HTMLService {
    update(HTML_UL, selector = "output") {
        const $out = document.getElementById(selector);
        $out.innerHTML = '';
        $out.insertAdjacentElement('beforeend', HTML_UL)
    }


}

export default new HTMLService()