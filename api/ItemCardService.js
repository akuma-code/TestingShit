import {
    $req
} from "./client.js";


class ItemCardService {
    DEL_btn(id) {
        const btn = document.createElement("button");
        btn.innerHTML = `Delete`
        btn.id = id

        btn.addEventListener("click", async (e) => {
            $req(`/api/${id}`, 'DELETE')

            e.target.closest("li").remove();
        })
        return btn
    }

    async ItemCard({
        name,
        amount = 0,
        id
    }) {
        const li = document.createElement("li");
        const btn = this.DEL_btn(id)

        li.classList.add("list-item");
        li.innerHTML = `${name}: ${amount}`;
        li.insertAdjacentElement("beforeend", btn)
        return li
    }

    async getList(items = []) {
        const UL = document.createElement('ul');


        items.forEach(item => {

            this.ItemCard(item)
                .then(res => UL.insertAdjacentElement("beforeend", res));
        })


        return UL
    }




}


export default new ItemCardService()