import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Dropdown, Image } from 'semantic-ui-react';

import * as constText from 'constants/text-constants';
import defaultIcon from './defaultIcon.png';

import './styles.scss';

export function EngUserDropdown({userImage, firstName, logout}) {
  const trigger = (
      <span>
          <Image avatar src={userImage || defaultIcon} />
      </span>
  );
  
  const options = [
    { 
      key: 'user',
      text: (
        <span>
          {constText.signedInAs} 
          <strong>{firstName}</strong>
        </span>
      ),
      disabled: true,
    },
    { key: constText.profile, text: constText.profile, as: Link, to: constText.linkToProfile },
    { key: constText.orders, text: constText.orders, as: Link, to: constText.linkToOrders },
    { key: constText.signOutKey, text: constText.signOut, onClick: logout }
  ];
  
  return (
      <Dropdown 
        trigger={trigger} 
        direction='left' 
        options={options}
        className='user-dropdown'
      />
  );
}

EngUserDropdown.propTypes = {
    userImage: PropTypes.string,
    userName: PropTypes.string,
    logout: PropTypes.func
};

EngUserDropdown.defaultProps = {
    userImage: defaultIcon,
    userName: 'anonymous',
    logout: ()=>{}
};