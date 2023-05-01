export default class Pizza {
    typePizza = null;
    sizePizza = null;

    constructor(typePizza, sizePizza)
    {
        this.typePizza = typePizza;
        this.sizePizza = sizePizza;
        this.toppings = [];
    }
    addToppings(toppings)
    {
        this.toppings.push(toppings);
    }
    removeToppings(toppings)
    {
        this.toppings = this.toppings.filter((item) => item['name'] !== toppings['name']);
    }
    getSize()
    {
        return this.sizePizza.name;
    }
    getStuffing()
    {
        return this.typePizza.name;
    }
    getToppings()
    {
        return this.toppings.map((item) => item.name).join(', ');
    }
    calculatePrice()
    {
        let prices = 0;
        prices = this.sizePizza.price + this.typePizza.price;
        this.toppings.forEach((toppings) =>
        {
            prices += toppings.getPrice(this.sizePizza);
        });
        return prices;
    }
    calculateCalories()
    {
        let calories = 0;
        calories = this.sizePizza.calories + this.typePizza.calories;
        this.toppings.forEach((toppings) =>
        {
            calories += toppings.getCalories(this.sizePizza);
        });
        return calories;
    }
}