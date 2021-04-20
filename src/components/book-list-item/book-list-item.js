import React from 'react';
import './book-list-item.css';

const BookListItem = ({ book, onAddedToCart }) => {
  const { url, title, author, price } = book;
  return (
    <div className="book-list-item">
      <div className="book-list-item-cover">
        <img src={url} alt="book-cover"></img>
      </div>

      <div className="book-list-item-info">
        <h3 href="#" className="book-list-item-title">
        {title}
        </h3>
        <div className="book-list-item-author">{author}</div>
        <div className="book-list-item-price">${price}</div>
        <button
          className="btn btn-info"
          onClick={() => onAddedToCart(book.id)}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default BookListItem;