class Type{
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}
class Size{
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}
class Toppings{
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }
}

const margarita = new Type('маргарита ', 500, 300);
const pepperoni = new Type('пепперони ', 800, 400);
const bavarian = new Type('баварская  ', 700, 450);

const bigSize = new Size('большая', 200, 200);
const smallSize = new Size('маленькая', 100, 100);

const mozzarellaForSmall = new Toppings('моцарелла', 50, 0);
const mozzarellaForBig = new Toppings('моцарелла', 100, 0);
const boardForSmall = new Toppings('сырный борт', 150, 50);
const boardForBig = new Toppings('сырный борт', 300, 50);
const cheeseForSmall = new Toppings('чедер и пармезан', 150, 50);
const cheeseForBig = new Toppings('чедер и пармезан', 300, 50);

class Pizza {
    price = 0;
    calories = 0;
    type = null;
    size = null;
    toppings = [];

    constructor(type, size) {
        this.type = type;
        this.createPizza(type);

        this.size = size;
        this.createPizza(size);
    }

    createPizza({price, calories}) {
        this.price += price;
        this.calories += calories;
    }
    removePizza({price, calories}) {
        this.price -= price;
        this.calories -= calories;
    }
    addToppings(toppings){
        this.createPizza(toppings);
        this.toppings.push(toppings);
    }
    removeToppings(toppings){
        this.removePizza(toppings);
        this.toppings = this.toppings.filter((item) => item['name'] !== toppings['name']);
    }
    getSize() {
        return this.size.name;
    }
    getStuffing() {
        return this.type.name;
    }

    getToppings(){
        return this.toppings.map((item) => item.name).join(', ');
    }
    calculatePrice(){
        return this.price;
    }
    calculateCalories(){
        return this.calories;
    }
}

const pizzaMargarita = new Pizza(margarita, smallSize);
pizzaMargarita.addToppings(boardForSmall);
pizzaMargarita.addToppings(cheeseForSmall);
pizzaMargarita.removeToppings(boardForSmall);
console.log(`Тип: ${pizzaMargarita.getStuffing()}`);
console.log(`Размер: ${pizzaMargarita.getSize()}`);
console.log(`Добавки: ${pizzaMargarita.getToppings()}`);
console.log(`Цена: ${pizzaMargarita.calculatePrice()} рублей`);
console.log(`Калорийность: ${pizzaMargarita.calculateCalories()} калорий`);