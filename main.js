let myLibrary = [];

function Book(){
const book = function(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`;
    } 
}
}

function addBookToLibrary() {
    
}

const theHobbit = new book('The Hobbit', 'J.R.R Tolkien','295','not read yet');

console.log(theHobbit.info());