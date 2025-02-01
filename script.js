const bookCard = document.getElementsByClassName("card-book");
console.log(bookCard);

const myLibrary = [];

// constructor
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  //this.readStatus = readStatus
}

// create a book from those arguments, and store the new book object into an array
Book.prototype.addBookToLibrary = function () {
  // add the new book in myLibrary array
  myLibrary.push(this);
  return myLibrary;
};

let book1 = new Book("The Secret history", "Donna Tartt", 576);
let book2 = new Book(
  "By the River Piedra I Sat Down and Wept",
  "Paulo Coelho",
  180
);
let book3 = new Book("Sophie's World", "Jostein Gaarder", 544);

book1.addBookToLibrary();
book2.addBookToLibrary();
book3.addBookToLibrary();

// Write a function that loops through the array and displays each book on the page
function displayBook() {
  return myLibrary.forEach((item, index) => {
    bookCard[index].innerHTML = `
    <h2 class="title">${item.title}</h2>
    <p class="author">By ${item.author}</p>
    <p class="pages">${item.pages} pages</p>
    <div class="card-btn">
    <button class="read-status btn">Read</button>
    <button class="remove-btn btn">Remove</button>`;
  });
}

displayBook();
