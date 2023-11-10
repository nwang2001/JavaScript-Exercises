// created a class with a constructor
class Bookshelf {
    constructor(books) {
        this.books = books;
    }

    //methods to add, remove, and count books
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

// creates an empty array books
var books = [];

// creates an object from the class
const bookshelf = new Bookshelf(books);

// add and remove methods used
bookshelf.addBook("The Great Gatsby");
bookshelf.addBook("To Kill a Mockingbird");
bookshelf.addBook("Pride and Prejudice");
bookshelf.removeBook("To Kill a Mockingbird");
bookshelf.removeBook("The Great Gatsby");

// used the method to count books and console log results
console.log(bookshelf.getBooks());
console.log(bookshelf);