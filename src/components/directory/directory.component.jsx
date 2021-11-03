import React from 'react';

import MenuItem from '../menu-item/menu-item.component';
import DirectoryContext from '../../contexts/directory/directory.context.js'
import './directory.styles.scss';

const Directory = () => {
	const sections = React.useContext(DirectoryContext);
	return (
  <div className='directory-menu'>
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
}

export default Directory;
