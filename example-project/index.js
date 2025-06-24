"use strict";
// Example TypeScript code for a simple book list application using classes
const list = document.getElementById('books');
const books = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
];
books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `<b>${book.title}</b> by ${book.author} <button class="delete">X</button>`;
    list.appendChild(listItem);
});
const form = document.getElementById('book-form');
const titleInput = document.getElementById('book-title');
const authorInput = document.getElementById('book-author');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newBook = { title: titleInput.value, author: authorInput.value };
    books.push(newBook);
    const listItem = document.createElement('li');
    listItem.innerHTML = `<b>${newBook.title}</b> by ${newBook.author} <button class="delete">X</button>`;
    list.appendChild(listItem);
    titleInput.value = '';
    authorInput.value = '';
});
list.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const listItem = event.target.parentElement;
        if (listItem) {
            list.removeChild(listItem);
        }
    }
});
