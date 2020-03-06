import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from '../../redux/cart/cart.actions';

const CheckoutItemWrapper = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

const Name = styled.span`
  width: 23%;
`;
const Quantity = styled.span`
  width: 23%;
`;
const Price = styled.span`
  width: 23%;
`;

const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  &:hover {
    color: #06aded;
  }
`;

const QtyControl = styled.div`
  font-weight: 700;
  cursor: pointer;
  color: black;

  &:hover {
    color: #06aded;
  }
`;

const Value = styled.span`
  margin: 0 12px;
`;

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemWrapper>
      <ImageContainer>
        <img
          src={imageUrl}
          alt='item'
          style={{ width: '100%', height: '100%' }}
        />
      </ImageContainer>
      <Name>{name}</Name>
      <Quantity style={{ display: 'flex' }}>
        <QtyControl onClick={() => removeItem(cartItem)}>&#8722;</QtyControl>
        <Value>{quantity}</Value>
        <QtyControl onClick={() => addItem(cartItem)}>&#43;</QtyControl>
      </Quantity>
      <Price>£{price}</Price>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutItemWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
