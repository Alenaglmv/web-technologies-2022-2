export default class ToppingItem {
    constructor(item, topping, handler) {
        this.item = item;
        this.topping = topping;
        this.handler = handler;
    }

    render() {
        const items = document.createElement("a");
        items.classList.add("topping");
        const item = this.item;
        const topping = this.topping;
        const handler = this.handler;
        items.onclick = function () {
            item.selectedTopping = topping;
            handler();
        };
        items.innerHTML = `
            <img src=${this.topping.src} alt="topping"/>
            <p>${this.topping.name}</p>
            <span class="price">${this.topping.getPrice()} ₽</span>`;
        return items;
    }
}