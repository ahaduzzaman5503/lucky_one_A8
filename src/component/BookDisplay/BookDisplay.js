import React from 'react';
import './BookDisplay.css'

const BookDisplay = ({book, addToCartBtn}) => {
    const {img, name, price, authors} = book;
    return (
        <div className='display-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>লেখক: {authors}</h3>
            <h4>বইয়ের দাম: {price}</h4>
            <button onClick={ ()=> addToCartBtn(book)} className='btn'>Add to card <i className='fas fa-cart-plus' ></i> </button> 
        </div>
    );
};

export default BookDisplay;