const addBook_dialog = document.getElementById("addBook_dialog");
const showBtn = document.getElementById("showDialog");
const submitBtn = document.getElementById("closeModal");

const myLibrary = [];

// constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// create a book from those arguments, and store the new book object into an array
Book.prototype.addBookToLibrary = function () {
  // add the new book in myLibrary array
  myLibrary.push(this);
  return myLibrary;
};

let book1 = new Book("The Secret History", "Donna Tartt", 503, true);
let book2 = new Book(
  "By the River Piedra I Sat Down and Wept",
  "Paulo Coelho",
  180,
  true
);
let book3 = new Book("Sophie's World", "Jostein Gaarder", 544, true);

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
    <button class="read-status btn" style="background-color: ${
      myLibrary[i].readStatus ? "#2db062" : "#1e81b0"
    }">${myLibrary[i].readStatus ? "Read" : "Not Read"}</button>
    <button class="remove-btn btn">Remove</button>
    </div>`;
    cardContainer.appendChild(cardBook);
  }

  const cardRemove = document.querySelectorAll(".remove-btn");
  cardRemove.forEach((button, index) => {
    button.addEventListener("click", function () {
      myLibrary.splice(index, 1);
      const card = button.closest(".card-book");
      if (card) {
        card.remove();
      }
      displayBook();
    });
  });

  // read status
  const readStatus = document.querySelectorAll(".read-status");
  readStatus.forEach((button) => {
    let isRead = true;
    button.addEventListener("click", function () {
      isRead = !isRead;
      if (isRead) {
        button.style.backgroundColor = "#2db062";
        button.textContent = "Read";
      } else {
        button.style.backgroundColor = "#1e81b0";
        button.textContent = "Not Read";
      }
    });
  });
}

displayBook();

showBtn.addEventListener("click", () => {
  addBook_dialog.showModal();
});

// add books
addBook_dialog.addEventListener("close", () => {
  const titleBook = document.getElementById("title_book");
  const author_book = document.getElementById("author_book");
  const pages_book = document.getElementById("pages_book");
  let readStatusCheckBox = document.querySelector(".messageCheckBox");
  let titleValue = titleBook.value;
  let authorValue = author_book.value;
  let pagesBookValue = Number(pages_book.value);

  let readStatus;

  if (readStatusCheckBox.checked) {
    readStatus = true;
  } else {
    readStatus = false;
  }

  let newBook = new Book(titleValue, authorValue, pagesBookValue, readStatus);
  newBook.addBookToLibrary();
  displayBook();

  // clearing form
  titleBook.value = "";
  author_book.value = "";
  pages_book.value = "";
  readStatus = false;
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBook_dialog.close();
});
