import PizzaaItem from "./PizzaaItem.js";

export default class Pizzaa {
    constructor(itemsPizzaa, pizza, handler) {
        this.itemsPizzaa = itemsPizzaa;
        this.pizza = pizza;
        this.selectedPizza = pizza[0];
        this.handler = handler;
    }

    render() {
        this.itemsPizzaa.textContent = '';
        console.log(this);
        this.pizza.map((pizza) =>
        {
            const pizzaItems = new PizzaaItem(this, pizza, this.handler);
            this.itemsPizzaa.appendChild(pizzaItems.render());
        })
        return this.itemsPizzaa;
    }
}