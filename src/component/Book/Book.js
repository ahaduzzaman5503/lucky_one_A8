import React, { useEffect, useState } from 'react';
import BookDisplay from '../BookDisplay/BookDisplay';
import './Book.css'
import CardBook from '../CardBook/CardBook'

const Book = (props) => {
    const [ books, setBooks] = useState([]);
    const [bookCard, setBookcard] = useState([])
 
    useEffect(()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])

    const addToCartBtn = (book) => {
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
                {
                     <CardBook 
                     bookCard={bookCard}
                     addToCartBtn= {addToCartBtn}
                     ></CardBook>
                }
                
                   
                
                
            </div>
        </div>
    );
};

export default Book;