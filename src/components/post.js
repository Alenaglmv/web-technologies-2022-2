export class Post {
    #el = null;
    #commentsEl = null;
    #post = null;
    #button = null;
    #getInfo = null;
    #getComments = null;

    constructor(el, getInfo, button, getComments, commentsEl) {
        this.#el = el;
        this.#commentsEl = commentsEl;
        this.#button = button;
        this.#getInfo = getInfo;
        this.#getComments = getComments;
    }

    async init () {
        const url = new URL(window.location.href);
        this.#post = +url.searchParams.get('post');
        await this.loadInfo();
        this.#button.onclick = async () => {
            await this.loadComments()
        };
    }

    async loadInfo() {
        try {
            let info = await this.#getInfo(this.#post);
            this.renderPost(info);
        } catch (err) {
            window.location.href = 'error.html';
            console.log(err);
        }
    }

    renderPost (info) {
        this.#el.innerHTML =
            `<p>ЗАГОЛОВОК : ${info.title}</p>
            <p>ОПИСАНИЕ : ${info.body}</p>`;
    }

    async loadComments() {
        try {
            let comments = await this.#getComments(this.#post);
            this.renderComments(comments);
        } catch (err) {
            window.location.href = 'error.html';
            console.log(err);
        }
    }

    renderComments (comments) {
        for (let i in comments) {
            this.#commentsEl.innerHTML +=
                `<div id="comment">
                    <p>ID : ${comments[i].id}</p>
                    <p>ИМЯ : ${comments[i].name}</p>
                    <p>ПОЧТА : ${comments[i].email}</p>
                    <p>ОПИСАНИЕ : ${comments[i].body}</p>
                </div>`
        }
        this.#button.style.display = "none";
    }
}