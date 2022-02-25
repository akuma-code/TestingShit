import {
    $req
} from "./client.js";

class HTMLService {
    DEL_btn(id) {
        const btn = document.createElement("button");
        btn.innerHTML = `Delete`
        btn.id = id
        btn.href = ``
        btn.addEventListener("click", async (e) => {
            e.target.closest("li").remove();
            await $req(`/api/${id}`, 'delete')
        })
        return btn
    }

    async ItemCard({
        name = "no_name",
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

        console.log('getList items :>> ', items);
        items.forEach(item => {

            this.ItemCard(item)
                .then(res => UL.insertAdjacentElement("afterbegin", res));
        })


        return UL
    }




}


export default new HTMLService()