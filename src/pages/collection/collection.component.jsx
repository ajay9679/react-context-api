import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionsContext from '../../contexts/collections/collections.context.js';

import './collection.styles.scss';

const CollectionPage = ({match}) => {
  // const collection = React.useContext(CollectionsContext)
  // const { title, items } = collection;
  return (
    <CollectionsContext.Consumer>
      {
        collections => {
          const collection = collections[match.params.collectionId];
          const { title, items } = collection;
          return (<div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
              {items.map(item => (
                <CollectionItem key={item.id} item={item} />
              ))}
            </div>
          </div>)
        }
      }
    </CollectionsContext.Consumer>
  );
};

export default CollectionPage;
