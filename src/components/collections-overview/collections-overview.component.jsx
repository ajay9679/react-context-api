import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import CollectionsContext from '../../contexts/collections/collections.context.js';

import './collections-overview.styles.scss';

const CollectionsOverview = () => {
	const collectionsMap = React.useContext(CollectionsContext);
	const collections = Object.keys(collectionsMap).map(key => collectionsMap[key]);
	return (
  <div className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);
}

export default CollectionsOverview;