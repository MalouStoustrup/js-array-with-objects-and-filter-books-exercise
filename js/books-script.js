// Task: Create an array of JavaScript objects where each book belongs to a specific category,
// and implement a filtering functionality that allows the user to sort books by category.

// Before you start:
// 1. Go to the "image" folder and identify the relevant books you want to include in the array.
// 2. Use websites like saxo.dk or amazon.co.uk to find detailed information about each book.
// 3. Each book must have a **category** (e.g., "fiction", "non-fiction", "science", etc.).
// 4. Implement a **filtering function** that allows the user to select a category and only see the books belonging to that category.
// TIP: Use the method from the previous task where we sorted movies and apply `.filter()` to your array.

// Example: Array of books categorized by genre
// Fiction
// {title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", publishedYear: 1925, pages: 218, images:"/img/the-great-gatsby.webp" }

"use strict";

const books = [ 
    
    {title:"1984", author:"George Orwell", category:"fiction", img:"img/1984.webp"},

    {title:"A Brief History of Time", author:"Stephen Hawkings", category:"science", img:"img/a-brief-history-of-time.webp"},

    {title:"A Game of Thrones", author:"George R. R. Martin", category:"fantasy", img:"img/a-game-of-thrones.webp"},

    {title:"A Peoples history of the united states", author:"Howard Zinn", category:"history", img:"img/a-peoples-history-of-the-united-states.webp"},

    {title:"Becoming", author:"Michelle Obama", category:"non-fiction", img:"img/becoming.webp"},

    {title:"Cosmos", author:"Carl Sagan", category:"science", img:"img/cosmos.webp"},

    {title:"Dracula", author:"Bram Stoker", category:"fantasy", img:"img/dracula.webp"},

    {title:"Educated", author:"Tara Westover", category:"non-fiction", img:"img/educated.webp"},

    {title:"Essentials of classic italian cooking", author:"Marcella Hazan", category:"cooking", img:"img/essentials-of-classic-italian-cooking.webp"},

    {title:"Frakentein", author:"Mary Shelley", category:"science", img:"img/frankenstein.webp"},

    {title:"Gene", author:"Siddhartha Mukherjee", category:"science", img:"img/gene.webp"},

    {title:"Guns Germs and steel", author:"Jared Diamond", category:"non-fiction", img:"img/guns-germs-and-steel.webp"},

    {title:"Harry Potter and the sorcerers stone", author:"J.K. Rowling", category:"fantasy", img:"img/harry-potter-and-the-sorcerers-stone.webp"},

    {title:"IT", author:"Stephen King", category:"Horror", img:"img/it.webp"},

    {title:"mastering the art of french cooking", author:"Simone Beck", category:"cooking", img:"img/mastering-the-art-of-french-cooking.webp"},

    {title:"Pride and Prejudice", author:"Jane Austed", category:"fiction", img:"img/pride-and-prejudice.webp"},

    {title:"Salt fat acid heat", author:"Samin Mosrat", category:"science", img:"img/salt-fat-acid-heat.webp"},

    {title:"Sapiens", author:"Yuval Noah Harari", category:"non-fiction", img:"img/sapiens.webp"},

    {title:"spqr a history of ancient rome", author:"Mary Beard", category:"history", img:"img/spqr-a-history-of-ancient-rome.webp"},

    {title:"The great gatsby", author:"Francis Scott Fitzgerald", category:"fiction", img:"img/the-great-gatsby.webp"},

    {title:"The hobbit", author: "J.R.R Tolkien", category:"fantasy", img:"img/the-hobbit.webp"},

    {title:"The joy of cooking", author:"Irma S. Rombauer", category:"cooking", img:"img/the-joy-of-cooking.webp"},

    {title:"The name of the Wind", author:"Patrick Rothfuss", category:"fantasy", img:"img/the-name-of-the-wind.webp"},

    {title:"The power of habit", author:"Charles Duhedg", category:"non-fiction", img:"img/the-power-of-habit.webp"},

    {title:"The selfish gene", author:"Richard Dawkings", category:"Science", img:"img/the-selfish-gene.webp"},

    {title:"The shining", author:"Stephen King", category:"horror", img:"img/the-shining.webp"},

    {title:"The silk roads", author:"Peter Frankopan", category:"non-fiction", img:"img/the-silk-roads.webp"},

    {title:"To kill a mockingbird", author:"Harper Lee", category:"fiction", img:"img/to-kill-a-mockingbird.webp"}
];

const booksContainer = document.getElementById("books-container");
const selectedCategory = document.getElementById("category-select");

function displayBooks(bogListe) {
    booksContainer.innerHTML ="";

    bogListe.forEach( (book) => { 
        const bookElement = document.createElement("article"); 
        
        bookElement.innerHTML = `
        <h3>${book.title} </h3>
        <p>Author: ${book.author}</p>
        <p>Kategori: ${book.category}</p>
        <figure>
            <img src="${book.img}" alt="${book.title}">
        </figure>`;

        booksContainer.appendChild(bookElement);

    }); 
}

displayBooks(books);

selectedCategory.addEventListener("change", () => {
    const selectedValue = selectedCategory.value;

    let filteredBooks;

    if (selectedValue === "all") {
        filteredBooks = books;
    } else {
        filteredBooks = books.filter(book => book.category === selectedValue)
    }

    displayBooks(filteredBooks);

});