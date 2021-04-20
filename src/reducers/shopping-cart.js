const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      totalPrice: 0,
      cartItemsCount: 0,
    }
  }

  switch (action.type) {
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state, action.payload, 1);
    case 'BOOK_REMOVED_FROM_CART':
      return updateOrder(state, action.payload, (-1));
    case 'BOOKS_REMOVED_FROM_CART':
      const item = state.shoppingCart.cartItems.find(({id}) => action.payload === id);
      return updateOrder(state, action.payload, (-item.count));
    default:
      return state.shoppingCart;
  }
}

const updateCartItems = (items, item, itemIndex) => {
  if (item.count === 0) {
    return [
      ...items.slice(0, itemIndex),
      ...items.slice(itemIndex + 1)
    ]
  }

  if (itemIndex === -1) {
    return [
      ...items,
      item
    ]
  }

  return [
    ...items.slice(0, itemIndex),
    item,
    ...items.slice(itemIndex + 1)
  ]
}

const updateOrder = (state, bookId, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems } } = state;

  const book = books.find(book => book.id === bookId);
  const itemIndex = cartItems.findIndex(({id}) => bookId === id);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(item, book, quantity);
  const newCartItems = updateCartItems(cartItems, newItem, itemIndex);

  return {
    ...state,
    cartItems: newCartItems,
    totalPrice: totalPriceSum(newCartItems),
    cartItemsCount: cartItemsCount(newCartItems),
  };
}

const updateCartItem = (item = {}, book, quantity) => {
  const {
    id = book.id,
    title = book.title,
    count = 0,
    total = 0,
  } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  }
}

const totalPriceSum = (cartItems) => {
  return cartItems.reduce((acc, next) => acc += next.total, 0);
}

const cartItemsCount = (cartItems) => {
  return cartItems.reduce((acc, next) => acc += next.count, 0)
}

export default updateShoppingCart;