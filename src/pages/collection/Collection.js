import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/Collection-item';
import { selectCollection } from '../../redux/shop/shop.selectors';

const CollectionPage = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 38px;
  margin: 0 auto 38px;
`;
const Items = styled.div`
  display: grid;
  grid-column-gap: 10px;
  grid-row-gap: 30px;

  @media (min-width: 350px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 430px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPage>
      <Title>{title}</Title>
      <Items>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </Items>
    </CollectionPage>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
