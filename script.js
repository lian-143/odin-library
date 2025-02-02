// const bookCard = document.getElementsByClassName("card-book");
const addBook_dialog = document.getElementById("addBook_dialog");
const showBtn = document.getElementById("showDialog");
const submitBtn = document.getElementById("closeModal");
const removeBtn = document.getElementsByClassName("remove-btn");

// input elements

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
  const cardContainer = document.getElementsByClassName("card-container")[0];
  cardContainer.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const cardBook = document.createElement("div");
    cardBook.classList.add("card-book");
    cardBook.innerHTML = `
    <h2 class="title">${myLibrary[i].title}</h2>
    <p class="author">By ${myLibrary[i].author}</p>
    <p class="pages">${myLibrary[i].pages} pages</p>
    <div class="card-btn">
    <button class="read-status btn">Read</button>
    <button class="remove-btn btn">Remove</button>
    </div>`;
    cardContainer.appendChild(cardBook);
  }
}

displayBook();

showBtn.addEventListener("click", () => {
  addBook_dialog.showModal();
});

// add books
addBook_dialog.addEventListener("close", (e) => {
  const titleBook = document.getElementById("title_book");
  const author_book = document.getElementById("author_book");
  const pages_book = document.getElementById("pages_book");

  const titleValue = titleBook.value;
  const authorValue = author_book.value;
  const pagesBookValue = Number(pages_book.value);

  let newBook = new Book(titleValue, authorValue, pagesBookValue);
  newBook.addBookToLibrary();
  displayBook();
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook_dialog.close();
});
