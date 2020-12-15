import React from 'react';
import {Button} from 'semantic-ui-react';
import {PropTypes} from 'prop-types';

import './style.scss';

export const EngDeleteButton = (props) => (
      <Button className='delete_button' icon='remove' size='huge' onClick={props.deleteItem} />
  );

EngDeleteButton.propTypes = {
  deleteItem: PropTypes.func.isRequired
};
  