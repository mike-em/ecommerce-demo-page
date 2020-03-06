import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../button/Button';
import CartItem from '../cart-item/Cart-item';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { withRouter } from 'react-router-dom';

const CartDropWrapper = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 50px;
  z-index: 5;
`;

const CartItems = styled.div`
  height: 340px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const CartEmpty = styled.span`
  font-size: 18px;
  margin: 80px auto;
`;

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropWrapper>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <CartEmpty>Your cart is empty...</CartEmpty>
        )}
      </CartItems>
      <Button
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        checkout
      </Button>
    </CartDropWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
