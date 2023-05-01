import Toppings from "./Toppings.js";

export default class Cheese extends Toppings {
    constructor(size) {
        let price, calories;
        if (size === Toppings.big) price = 300;
        if (size === Toppings.small) price = 150;
        if (size === Toppings.big) calories = 50;
        if (size === Toppings.small) calories = 50;
        super('Чеддер и пармезан', price, calories, size);
    }
    src="https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796";

    getPrice() {
        if (this.size.name === Toppings.big) {
            this.price = 300;
        }
        if (this.size.name === Toppings.small) {
            this.price = 150;
        }
        return this.price;
    }

    getCalories() {
        if (this.size.name === Toppings.big) {
            this.calories = 50;
        }
        if (this.size.name === Toppings.small) {
            this.calories = 50;
        }
        return this.calories;
    }
}