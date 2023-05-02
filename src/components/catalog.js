export class Catalog {
    #el = null;
    #paginationEl = null;
    #cardsEl = null;
    #page = null;
    #total = null;
    #renderCard = null;
    #getPosts = null;

    constructor(el, options) {
        const { renderCard, getPosts } = options;
        this.#el = el;
        this.#page = this.getPage();
        this.#paginationEl = el.querySelector('[data-catalog-pagination]');
        this.#cardsEl = el.querySelector('[data-catalog-cards]');
        this.#renderCard = renderCard;
        this.#getPosts = getPosts;
    }

    get limit () {
        return 12;
    }

    get pageCount () {
        return Math.ceil(this.#total / this.limit)
    }

    async init () {
        window.onpopstate = async () => {
            const url = new URL(window.location.href);
            const page = +url.searchParams.get('page');

            if (page !== this.#page) {
                this.setPage(page);
                await this.loadPosts()
            }
        }

        this.#paginationEl.addEventListener('click', async (event) => {
            const item = event.target.dataset.catalogPaginationPage ? event.target : event.target.closest('[data-catalog-pagination-page]')

            if (!item) {
                return;
            }

            const page = +item.dataset.catalogPaginationPage;

            this.setPage(page);
            this.pushState();
            await this.loadPosts()
        })

        await this.loadPosts()
    }

    getPage() {
        const url = new URL(window.location.href);
        const page = +url.searchParams.get('page');

        return page || 1;
    }

    setPage(page) {
        this.#page = page;
    }

    pushState () {
        const url = new URL(window.location.href);
        url.searchParams.set('page', this.#page);

        window.history.pushState({}, '', url)
    }

    async loadPosts() {
        try {
            let {posts, total} = await this.#getPosts({ limit: this.limit, page: this.#page});
            this.#total = total;
            this.renderPosts(posts);
            this.renderPagination();
        } catch (err) {
            window.location.href = 'error.html';
            console.log(err);
        }
    }

    renderPosts(posts) {
        this.#cardsEl.innerHTML = posts.map(this.#renderCard).join('')
    }

    renderPagination() {
        this.#paginationEl.innerHTML = '';

        for (let index = 0; index < this.pageCount; index++) {
            const page = index + 1;

            const button = document.createElement('button');
            button.classList.add('catalog__pagination-item');

            if (page === this.#page) {
                button.classList.add('catalog__pagination-item_active')
            }
            button.dataset.catalogPaginationPage = page;
            button.textContent = page;
            this.#paginationEl.appendChild(button);
        }
    }
}