import React from 'react';
import styled from 'styled-components';
import MenuItem from '../menu-item/MenuItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirecotrySections } from '../../redux/directory/directory.selectors';

const DirectoryMenu = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Directory = ({ sections }) => {
  return (
    <DirectoryMenu>
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </DirectoryMenu>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirecotrySections
});

export default connect(mapStateToProps)(Directory);
