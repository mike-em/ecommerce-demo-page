import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { clearCart } from '../../redux/cart/cart.actions';

import CheckoutItem from '../../components/checkout-item/Checkout-item';

import StripeCheckoutButton from '../../components/stripe-button/Stripe-button';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';

const CheckoutPage = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;

  @media (min-width: 350px) {
    width: 95%;
  }
  @media (min-width: 768px) {
    width: 55%;
  }

  & button {
    margin-left: auto;
    margin-top: 50px;
  }

  p {
    color: red;
    margin-top: 0;
  }
`;

const CheckoutHeader = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
`;

const Total = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 26px;
`;

const Checkout = ({ cartItems, total, clearAllItems }) => {
  return (
    <CheckoutPage>
      <CheckoutHeader>
        <HeaderBlock>
          <span>product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>quantity </span>
        </HeaderBlock>
        <HeaderBlock>
          <span>price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span></span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>
        <span style={{ textTransform: 'uppercase' }}>total: £{total}</span>
      </Total>
      <StripeCheckoutButton price={total} clearAll={clearAllItems} />
      <p style={{ marginTop: '30px' }}>
        To test checkout please use the following payment detais:
      </p>
      <p>Card Number: 4242 4242 4242 4242</p>
      <p>
        Date: 09/23 <span style={{ marginLeft: '50px' }}> CVC: 123</span>
      </p>
    </CheckoutPage>
  );
};

const mapDispatchToProps = dispatch => ({
  clearAllItems: () => dispatch(clearCart()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
