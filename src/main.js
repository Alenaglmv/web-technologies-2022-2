import Bavarian from "./models/Bavarian.js";
import Margarita from "./models/Margarita.js";
import Pepperoni from "./models/Pepperoni.js";
import Size from "./models/Size.js";
import EmptyPizza from "./models/EmptyPizza.js";
import Cheese from "./models/Cheese.js";
import CheeseBoard from "./models/CheeseBoard.js";
import Mozzarella from "./models/Mozzarella.js";
import BasketButton from "./components/BasketButton.js";
import SizeButton from "./components/SizeButton.js";
import Pizzaa from "./components/Pizzaa.js";
import Topping from "./components/Topping.js";

class PizzaMenu {
    constructor() {
        this.size = new Size('Маленькая', 100, 100);
        // this.toppings = null;
        this.pizza = new EmptyPizza();
        this.basket = new BasketButton(document.getElementById('basket'));
        this.pizzaa = new Pizzaa(document.getElementsByClassName('types')[0],
            [new Bavarian(this.size), new Margarita(this.size), new Pepperoni(this.size)],
            (function () {
                this.pizza = this.pizzaa.selectedPizza;
                this.pizza.toppings.forEach((toppings) => {
                    this.pizza.removeToppings(toppings);
                })
                this.basket.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
                console.log(this.pizza);
            }).bind(this));

        this.topping = new Topping(document.getElementsByClassName('toppings')[0],
            [new CheeseBoard(this.size), new Mozzarella(this.size), new Cheese(this.size)],
            (function () {
                this.toppings = this.topping.selectedTopping;
                this.pizza.addToppings(this.toppings);
                this.basket.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
                console.log(this.toppings);
            }).bind(this));


        this.sizeButton = new SizeButton(document.getElementsByClassName('size')[0],
            (function () {
                this.size = new Size('Маленькая', 100, 100);
                this.pizza.sizePizza = this.size;
                this.topping.topping.forEach((item) => {
                    item.size = this.size;
                });
                this.topping.render();
                this.basket.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
                console.log(this.pizza);
            }).bind(this),
            (function () {
                this.size = new Size('Большая', 200, 200);
                this.pizza.sizePizza = this.size;
                this.topping.topping.forEach((item) => {
                    item.size = this.size;
                });
                this.topping.render();
                this.basket.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
                console.log(this.pizza);
            }).bind(this));
    }

    render() {
        this.basket.render(this.pizza.calculatePrice(), this.pizza.calculateCalories());
        this.pizzaa.render();
        this.topping.render(this.pizza);
        this.sizeButton.render();
    }
}

const pizzaMenu = new PizzaMenu();
pizzaMenu.render();