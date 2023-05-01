export default class SizeButton{
    constructor(item, smallHandler, bigHandler) {
        this.item = item;
        this.small = item.querySelector("#small");
        this.big = item.querySelector("#big");

        this.small.onclick = (function() {
            this.small.classList.add("active");
            this.big.classList.remove("active");
            smallHandler();
        }).bind(this);

        this.big.onclick = (function() {
            this.small.classList.remove("active");
            this.big.classList.add("active");
            bigHandler();
        }).bind(this);
    }

    render() {
        return this.item;
    }
}