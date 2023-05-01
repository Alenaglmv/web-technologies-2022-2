export default class PizzaaItem {
    constructor(item, pizza, handler) {
        this.item = item;
        this.pizza = pizza;
        this.handler = handler;
    }

    render() {
        const items = document.createElement("a");
        const itemsPizza = this.item;
        const pizza = this.pizza;
        const handler = this.handler;
        items.classList.add("type");
        items.onclick = function () {
            itemsPizza.selectedPizza = pizza;
            handler();
        };
        items.innerHTML = `
            <div>
                <img src=${this.pizza.src} alt="pizza"/>
                <p>${this.pizza.typePizza.name}</p>
            </div>`;
        return items;
    }
}