const library = [];

function Book(author, title, pages, isRead) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.isRead = isRead;
}

function addBookToLibrary(book) {
  library.push(book);
}

const mainContainer = document.querySelector('.main.container');

function createItemOnPage() {
  const gridItem = document.createElement('div');
  gridItem.classList.add('grid-item');
  mainContainer.appendChild(gridItem);
  const gridLeft = document.createElement('div');
  gridLeft.classList.add('grid-left');
  gridItem.appendChild(gridLeft);
  const titleAuthor = document.createElement('div');
  titleAuthor.classList.add('title-author');
  gridLeft.appendChild(titleAuthor);
  const bookTitle = document.createElement('p');
  const bookAuthor = document.createElement('p');
  bookTitle.classList.add('book', 'title');
  bookAuthor.classList.add('book', 'author');
  titleAuthor.appendChild(bookTitle);
  titleAuthor.appendChild(bookAuthor);
  const bookPages = document.createElement('p');
  bookPages.classList.add('book', 'pages');
  gridLeft.appendChild(bookPages);
  const gridRight = document.createElement('p');
  gridRight.classList.add('grid-right');
  gridItem.appendChild(gridRight);
  const isRead = document.createElement('p');
  isRead.classList.add('book', 'is-read');
  gridRight.appendChild(isRead);
}
