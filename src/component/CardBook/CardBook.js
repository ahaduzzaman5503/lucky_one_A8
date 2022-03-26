import React from 'react';
import './CardBook.css';

const CardBook = ({bookCard, addToCartBtn}) => {
    const {img, name, price, authors} = bookCard;
    return (
        <div className='cardBook'>
            
            <h1>Selected Books</h1>
            <h2>Book Pic: {img}</h2>
            <h2>Book authors: {authors}</h2>
            <h2>Book Name: {name}</h2>
            <h2>Book Price: {price}</h2>

            <p>Total Book length: {bookCard.length}</p>

            <button className='btn-right-side' >Choose 1 for me</button> <br /><br />
            <button className='btn-right-side'>Choose again</button>
        </div>
    );
};

export default CardBook;