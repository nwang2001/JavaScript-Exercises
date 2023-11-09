class Bookshelf {
    constructor(books) {
        this.books = books;
    }
    addBook(books) {
        this.books.push(books);
        return this.books;
    }
    removeBook(books) {
        this.books = this.books.filter(b => b !== books);
        return this.books;
    }
    getBooks(books) {
        return this.books.length;
    }
}
var books = [];
const bookshelf = new Bookshelf(books);
bookshelf.addBook("The Great Gatsby");
bookshelf.addBook("To Kill a Mockingbird");
bookshelf.addBook("Pride and Prejudice");
bookshelf.removeBook("To Kill a Mockingbird");
bookshelf.removeBook("The Great Gatsby");

console.log(bookshelf.getBooks());
console.log(bookshelf);