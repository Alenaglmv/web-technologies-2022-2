import {Catalog} from "./src/components/catalog.js";

const renderPostItem = (item) => {
    return `<a  href="post.html?post=${item.id}" class="post-card">
        <span class="post-card__title">${item.title}</span>
        <span class="post-card__body">${item.body}</span>
    </a>`;
}

const getPostItems = async ({ limit, page }) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const total = +res.headers.get('x-total-count');
    const posts = await res.json();
    return { posts, total };
}

const init = async () => {
    const catalog = document.getElementById('catalog');
    await new Catalog(catalog, {
        renderCard: renderPostItem,
        getPosts: getPostItems
    }).init();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
}
else {
    await init();
}

const renderPhotoItem = (item) => {
    return `<a href="photos/${item.id}" class="photo-item">
        <span class="photo-item__title"> ${item.title}</span>
        <img src=${item.url} class="photo-item__image" alt="photo">
    </a>`
}

const getPhotoItems = async ({ limit, page }) => {
    let res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`);
    const total = +res.headers.get('x-total-count');
    const items = await res.json();
    return { items, total };
}