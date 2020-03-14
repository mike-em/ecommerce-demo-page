import React from 'react';
import styled from 'styled-components';
import CollectionItem from '../collection-item/Collection-item';

const CollPreveiew = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
`;

const Preview = styled.div`
  display: grid;
  grid-gap: 10px;

  @media (min-width: 350px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 430px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CollectionPreview = ({ title, items }) => {
  return (
    <CollPreveiew>
      <Title>{title}</Title>
      <Preview>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </Preview>
    </CollPreveiew>
  );
};

export default CollectionPreview;
