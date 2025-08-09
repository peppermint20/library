const myLibrary = [];

function Book(title, author, page) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.page = page;
  this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, page) {
  // take params, create a book then store it in the array
  myLibrary.push(new Book(title, author, page));
}

function testBook() {
  myLibrary.push(new Book("Title1", "Author1", "Page1"));
  myLibrary.push(new Book("Title2", "Author2", "Page2"));
  myLibrary.push(new Book("Title3", "Author3", "Page3"));
  return 0;
}

const container = document.querySelector(".container");
const form = document.querySelector("form");

// Add this one to the new items
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const card = document.createElement("div");
  card.classList.add("card");

  const ul = document.createElement("ul");

  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const page = document.getElementById("page");

  addBookToLibrary(title.value, author.value, page.value);

  let book = myLibrary[myLibrary.length - 1];
  // Display to page

  container.appendChild(card);
  card.appendChild(ul);
  ul.appendChild(li);
});
