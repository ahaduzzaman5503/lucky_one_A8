import React from 'react';
import './CardBook.css';

const CardBook = (props) => {
const {bookCard} = props;

console.log(bookCard)
    return (
        <div className='cardBook'>
            <h1>Selected Books</h1>
           <div className="tow-div">
           <div className="book-pic">
            <h2>Book Pic: {}</h2>
            </div>
            
            <div className="book-name-price">
            <h2>Book Name: {}</h2>
            <h2>Book Price: {}</h2>
            </div>
           </div>

            <p>Total Book length: {bookCard.length}</p>

            <button className='btn-right-side' >Choose 1 for me</button> <br /><br />
            <button className='btn-right-side'>Choose again</button>
        </div>
    );
};

export default CardBook;