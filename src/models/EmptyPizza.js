import Pizza from './Pizza.js';
import Type from './Type.js';
import Size from './Size.js';

export default class EmptyPizza extends Pizza {

    constructor() {
        const type = new Type("", 0, 0);
        super(type, new Size("", 0, 0));
    }
}