import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../collection-preview/Collection-preview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewWrapper>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
