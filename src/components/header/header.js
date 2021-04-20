import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { connect } from 'react-redux';


const Header = ({ totalPrice, cartItemsCount }) => {
  return (
    <header className="header container">
      <Link to="/" className="header-title">ReStore</Link>
      <div className="header-amount">
        <i className="fa fa-shopping-cart"></i>
        <span>{cartItemsCount} items ($ {totalPrice}) </span>
      </div>
    </header>
  )
}

const mapStateToProps = ({ shoppingCart: { totalPrice, cartItemsCount } }) => {
  return { totalPrice, cartItemsCount }
}

export default connect(mapStateToProps)(Header);