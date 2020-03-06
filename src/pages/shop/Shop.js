import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverveiw from '../../components/collections-overview/Collections-overview';
import Collection from '../collection/Collection';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverveiw} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
