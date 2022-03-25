import React from 'react';
import './BookDisplay.css'

const BookDisplay = (props) => {
    const {img, name, price, authors} = props.book;
    return (
        <div className='display-container'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>লেখক: {authors}</h3>
            <h4>বইয়ের দাম: {price}</h4>
            <button className='btn'>Add to card  </button> <i class='fas fa-cart-plus' ></i>
        </div>
    );
};

export default BookDisplay;