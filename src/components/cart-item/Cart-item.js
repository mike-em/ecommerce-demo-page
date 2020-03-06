import React from 'react';
import styled from 'styled-components';

const CartItemWrapper = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;

const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
`;

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemWrapper>
      <img src={imageUrl} alt="item" style={{ width: '30%' }} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x £{price}
        </span>
      </ItemDetails>
    </CartItemWrapper>
  );
};

export default CartItem;
