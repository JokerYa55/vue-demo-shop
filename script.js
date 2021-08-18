class book {
    isdn;
    title;
    pageCount = 0;
    author;

    constructor(isdn, title, pageCount, author) {
        this.author = author;
        this.isdn = isdn;
        this.pageCount = pageCount;
        this.title = title;
    }
}

var main = new Vue({
    el: '#app',
    data: {
        title: 'Книжный магазин',
        bookList = [new book('sdkjfhskdfskjd-1', 'Сказки', 100, 'Народ')]
    }
});