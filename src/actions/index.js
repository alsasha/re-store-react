const booksLoaded = (newBooks) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks,
  }
}

const booksRequested = () => {
  return {
    type: 'FETCH_BOOKS_REQUEST'
  }
}

const booksError = (error) => {
  return {
    type: 'FETCH_BOOKS_FAILURE',
    payload: error,
  }
}

const bookRemovedFromCart = (id) => {
  return {
    type: 'BOOK_REMOVED_FROM_CART',
    payload: id,
  }
}

const allBooksRemovedFromCart = (id) => {
  return {
    type: 'BOOKS_REMOVED_FROM_CART',
    payload: id,
  }
}


const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
  .then(data => dispatch(booksLoaded(data)))
  .catch(err => dispatch(booksError(err)));
}

const bookAddedToCart = (id) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: id
  }
}

export {
  fetchBooks,
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
};