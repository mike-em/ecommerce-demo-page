import React from 'react';
import { connect } from 'react-redux';

import styled from 'styled-components';
import Button from '../button/Button';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.scss';

const Image = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

const CollItem = styled.div`
  /* width: 22vw; */
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;

  &:hover {
    ${Image} {
      opacity: 0.8;
    }
  }
`;

const CollFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

const Name = styled.div`
  width: 85%;
  margin-bottom: 15px;
  text-transform: uppercase;
`;

const Price = styled.div`
  width: 15%;
`;

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollItem className='collection-item'>
      <Image style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollFooter className='collection-footer'>
        <Name className='name'>{name}</Name>
        <Price className='price'>£{price}</Price>
      </CollFooter>
      <Button onClick={() => addItem(item)} inverted className='custom-button'>
        Add to cart
      </Button>
    </CollItem>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
