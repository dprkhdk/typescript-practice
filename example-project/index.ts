// Example TypeScript code for a simple book list application using classes

// class Book {
//     constructor(
//         public title: string,
//         public author: string,
        
//     ) {
//         this.title = title;
//         this.author = author;
//     }
// }
// const list = document.getElementById('books') as HTMLUListElement;
// const books: Book[] = [
//     new Book('1984', 'George Orwell'),
//     new Book('To Kill a Mockingbird', 'Harper Lee'),
//     new Book('The Great Gatsby', 'F. Scott Fitzgerald'),
//     new Book('The Catcher in the Rye', 'J.D. Salinger'),
//     new Book('Pride and Prejudice', 'Jane Austen'),
// ];
// books.forEach((book) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = `${book.title} by ${book.author}`;
//     list.appendChild(listItem);
// });

// const form = document.getElementById('book-form') as HTMLFormElement;
// const titleInput = document.getElementById('book-title') as HTMLInputElement;
// const authorInput = document.getElementById('book-author') as HTMLInputElement;
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const newBook = new Book(titleInput.value, authorInput.value);
//     books.push(newBook);
    
//     const listItem = document.createElement('li');
//     listItem.textContent = `${newBook.title} by ${newBook.author}`;
//     list.appendChild(listItem);
    
//     titleInput.value = '';
//     authorInput.value = '';
// });


type Book = {
    title: string;
    author: string;
}
const list = document.getElementById('books') as HTMLUListElement;
const books: Book[] = [
    { title: '1984', author: 'George Orwell' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'Pride and Prejudice', author: 'Jane Austen' },
    
];
books.forEach((book) => {
    const listItem = document.createElement('li') as HTMLLIElement;

    listItem.innerHTML = `<b>${book.title}</b> by ${book.author} <button class="delete">X</button>`;

    list.appendChild(listItem);
});
const form = document.getElementById('book-form') as HTMLFormElement;
const titleInput = document.getElementById('book-title') as HTMLInputElement;
const authorInput = document.getElementById('book-author') as HTMLInputElement;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newBook: Book = { title: titleInput.value, author: authorInput.value };
    books.push(newBook);
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `<b>${newBook.title}</b> by ${newBook.author} <button class="delete">X</button>`;
    list.appendChild(listItem);
    
    titleInput.value = '';
    authorInput.value = '';
});
list.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).classList.contains('delete')) {
        const listItem = (event.target as HTMLElement).parentElement;
        if (listItem) {
            list.removeChild(listItem);
        }
    }
});