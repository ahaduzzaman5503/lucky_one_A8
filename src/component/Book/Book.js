import React, { useEffect, useState } from 'react';
import BookDisplay from '../BookDisplay/BookDisplay';
import './Book.css'

const Book = () => {
    const [ books, setBooks] = useState([]);


    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    return (
        <div className='book-container'>
            <div className="book-display">
                {
                    books.map(book=><BookDisplay key={book.id}
                    book={book}
                    ></BookDisplay>)
                }
            </div>
            <div className="selected-books">
                I am selected books
            </div>
        </div>
    );
};

export default Book;