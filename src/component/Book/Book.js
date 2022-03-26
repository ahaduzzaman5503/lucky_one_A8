import React, { useEffect, useState } from 'react';
import BookDisplay from '../BookDisplay/BookDisplay';
import './Book.css'

const Book = (props) => {
    const [ books, setBooks] = useState([]);
    const [bookCard, setBookcard] = useState([])
 
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    const addToCartBtn = (book) => {
        console.log(book)
        const newBookCard = [...bookCard, book]
        setBookcard(newBookCard);
    }

    return (
        <div className='book-container'>
            <div className="book-display">
                {
                    books.map(book=><BookDisplay 
                    key={book.id}
                    book={book}
                    addToCartBtn= {addToCartBtn}
                    ></BookDisplay>)
                }
            </div>
            <div className="selected-books">
                <h1>Selected Books</h1>
                <div className='book-area'>
                    <p>Total Book: {bookCard.length}</p>
                </div>
                <button className='btn-right-side' >Choose 1 for me</button> <br /><br />
                <button className='btn-right-side'>Choose again</button>
            </div>
        </div>
    );
};

export default Book;