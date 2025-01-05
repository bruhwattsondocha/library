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

addBookToLibrary(new Book('Harper Lee', 'To Kill a Mockingbird', 323, 'unread'));
addBookToLibrary(new Book('Jim Carry', 'Suck a Mockingbird', 33, 'unread'));
addBookToLibrary(new Book('Ktoto', 'Mir i mir', 500, 'unread'));
addBookToLibrary(new Book('Quok', 'Ptitsa', 10000, 'unread'));


const mainContainer = document.querySelector('.main.container');

function createItemOnPage(book) {
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

  function fillItem(book) {
    bookTitle.innerText = book.title;
    bookAuthor.innerText = `by ${book.author}`;
    bookPages.innerText = `Pages: ${book.pages}`;
    isRead.innerText = book.isRead;
  }
  fillItem(book);
}

// Create function that loops through all array items and prints them on display
function displayAllBooks(library) {
  library.forEach(book => {
    createItemOnPage(book);
  });
}


displayAllBooks(library)

const addNewBookButton = document.querySelector('.add-button');
const newBookFormContainer = document.querySelector('.form.container');
addNewBookButton.addEventListener('click', showNewBookForm);

function showNewBookForm() {
  if (newBookFormContainer.style.display === '' || newBookFormContainer.style.display === 'none') {
    newBookFormContainer.style.display = 'block';
  } else {
    newBookFormContainer.style.display = 'none';
  }
}