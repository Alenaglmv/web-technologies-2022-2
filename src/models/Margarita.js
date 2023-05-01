import Pizza from './Pizza.js';
import Type from "./Type.js";

export default class Margarita extends Pizza {
    constructor(size) {
        const type = new Type('Маргарита', 500, 300)
        super(type, size);
    }
    src = "https://dodopizza-a.akamaihd.net/static/Img/Products/748949429e25404ea10aab002c910d84_366x366.webp";
}