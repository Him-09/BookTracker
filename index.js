// Reading Lists 📖
const goodReadsInfo = {
    currentlyReading: [
        {
            title: "Atomic Habits",
            author: "James Clear",
        },
    ],

    wantToRead: [
        {
            title: "Intermezzo",
            author: "Sally Rooney",
        },
    ],
};

const addNewBook = (books, ...additionalBookObjects) => {
    return [...books, ...additionalBookObjects];
};

goodReadsInfo.currentlyReading = addNewBook(
    goodReadsInfo.currentlyReading,
    { title: "The Message", author: "Ta-Nehisi Coates" },
    { title: "ONYX STORM", author: "Rebecca Yarros" }
);

goodReadsInfo.wantToRead = addNewBook(
    goodReadsInfo.wantToRead,
    { title: "IRON FLAME", author: "Rebecca Yarros" },
    { title: "THE NIGHTINGALE", author: "Kristin Hannah" }
);

// Function to render books to HTML
const renderBooks = () => {
    const currentlyReadingList = document.getElementById('currently-reading-list');
    const wantToReadList = document.getElementById('want-to-read-list');

    // Clear existing lists
    currentlyReadingList.innerHTML = '';
    wantToReadList.innerHTML = '';

    // Render Currently Reading books
    goodReadsInfo.currentlyReading.forEach(book => {
        const li = document.createElement('li');
        li.className = 'book-item';
        li.innerHTML = `
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">by ${book.author}</div>
                `;
        currentlyReadingList.appendChild(li);
    });

    // Render Want to Read books
    goodReadsInfo.wantToRead.forEach(book => {
        const li = document.createElement('li');
        li.className = 'book-item';
        li.innerHTML = `
                    <div class="book-title">${book.title}</div>
                    <div class="book-author">by ${book.author}</div>
                `;
        wantToReadList.appendChild(li);
    });
};

// Add event listener for adding new books
document.getElementById('add-book-btn').addEventListener('click', () => {
    const titleInput = document.getElementById('book-title');
    const authorInput = document.getElementById('book-author');
    const listSelect = document.getElementById('book-list');

    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const list = listSelect.value;

    if (title && author) {
        goodReadsInfo[list] = addNewBook(
            goodReadsInfo[list],
            { title, author }
        );

        // Clear inputs
        titleInput.value = '';
        authorInput.value = '';

        // Re-render the book lists
        renderBooks();
    } else {
        alert('Please enter both title and author!');
    }
});

// Initial render
renderBooks();