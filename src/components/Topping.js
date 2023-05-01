import ToppingItem from "./ToppingItem.js";

export default class Topping{
    constructor(item, topping, handler) {
        this.item = item;
        this.topping = topping;
        this.selectedTopping = topping[0];
        this.handler = handler;
    }

    render() {
        this.item.textContent = '';
        this.topping.map((topping) => {
            const toppingItems = new ToppingItem(this, topping, this.handler);
            this.item.appendChild(toppingItems.render());
        })
        return this.topping;
    }
}