import React, { Component } from 'react';
import BookListItem from '../book-list-item/';
import withBookstoreService from '../hoc';
import { connect } from 'react-redux';
import {
  fetchBooks,
  bookAddedToCart,
} from '../../actions';
import './book-list.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator/';
import compose from '../../utils';

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, isLoading, isError, bookAddedToCart } = this.props;
    if (isLoading) {
      return <Spinner />
    }

    if (isError) {
      return <ErrorIndicator />
    }

    return <BookList
      books={books}
      onAddedToCart={bookAddedToCart}
    />
  }
};

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
       {
        books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem
                onAddedToCart={onAddedToCart}
                book={book}
              />
            </li>
          )})
        }
    </ul>
  )
}

const mapStateToProps = ({ bookList: { books, isLoading, isError } }) => {
  return { books, isLoading, isError }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    bookAddedToCart: (id) => dispatch(bookAddedToCart(id)),
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);