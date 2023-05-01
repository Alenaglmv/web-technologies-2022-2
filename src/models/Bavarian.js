import Pizza from './Pizza.js';
import Type from "./Type.js";

export default class Bavarian extends Pizza {
    constructor(size) {
        const type = new Type('Баварская', 700, 450);
        super(type, size);
    }
    src = "https://dodopizza-a.akamaihd.net/static/Img/Products/3a948b9d5af14d219e2c54282229755a_366x366.webp";
}