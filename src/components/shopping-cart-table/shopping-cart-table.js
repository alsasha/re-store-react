import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';
import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from '../../actions';

const ShoppingCartTable = ({ items, totalPrice, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { title, count, total, id } = item;
    return (
      <tr key={id}>
        <th scope="row">{ idx + 1 }</th>
        <td>{ title }</td>
        <td>{ count }</td>
        <td>$ { total }</td>
        <td className="action">
          <button
            className="btn btn-outline-warning"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle"></i>
          </button>
          <button
            className="btn btn-outline-success"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle"></i>
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        </td>
      </tr>
    )
  }
  return (
    <div>
      <h3>Your Order</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Item</th>
            <th scope="col">Count</th>
            <th scope="col">Price</th>
            <th className="action-th" scope="col">Action</th>
          </tr>
        </thead>

        <tbody>
          {items.map(renderRow)}
        </tbody>
      </table>
      <div className="total">
        Total: $ { totalPrice }
      </div>
    </div>
  )
}

const mapStateToProps = ({ shoppingCart: { cartItems , totalPrice} }) => {
  return {
    items: cartItems,
    totalPrice: totalPrice,
  }
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);