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
  display: flex;
  justify-content: space-between;
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
