export default class BasketButton {
    constructor(item) {
        this.item = item;
    }

    render(price, calories) {
        this.item.textContent = `Добавить в корзину за ${price} ₽ (${calories} кКалл)`;
        return this.item;
    }
}