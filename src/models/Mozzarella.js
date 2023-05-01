import Toppings from "./Toppings.js";

export default class Mozzarella extends Toppings {
    constructor(size) {
        let price, calories;
        if (size === Toppings.big) price = 100;
        if (size === Toppings.small) price = 50;
        if (size === Toppings.big) calories = 0;
        if (size === Toppings.small) calories = 0;
        super('Сливочная моцарелла', price, calories, size);

    }
    src = "https://dodopizza-a.akamaihd.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png";

    getPrice() {
        if (this.size.name === Toppings.big) {
            this.price = 100;
        }
        if (this.size.name === Toppings.small) {
            this.price = 50;
        }
        return this.price;
    }

    getCalories() {
        if (this.size.name === Toppings.big) {
            this.calories = 0;
        }
        if (this.size.name === Toppings.small) {
            this.calories = 0;
        }
        return this.calories;
    }
}