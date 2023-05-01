import Pizza from './Pizza.js';
import Type from "./Type.js";

export default class Pepperoni extends Pizza {
    constructor(size) {
        const type = new Type('Пепперони', 800, 400);
        super(type, size);
    }
    src = "https://dodopizza-a.akamaihd.net/static/Img/Products/fb9cc5b8ff2e47bdbcbdcb5930cddf06_366x366.webp";
}