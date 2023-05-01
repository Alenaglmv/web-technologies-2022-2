export default class Toppings {
    static small = "Маленькая";
    static big = "Большая";

    constructor(name, price, calories, size) {
        this.name = name;
        this.size = size;
        this.price = price;
        this.calories = calories;
    }
}