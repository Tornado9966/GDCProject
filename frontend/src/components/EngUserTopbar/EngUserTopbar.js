import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'semantic-ui-react';

import EngLoginForm from 'components/EngLoginForm';
import { loginBtnText }  from 'constants/text-constants';
import EngUserDropdown from 'components/EngUserDropdown';

import './styles.scss';

export function EngUserTopbar({ loggedIn }) {

  return loggedIn ?
    <EngUserDropdown /> :
    <Modal trigger={<Button className='modal-button'>{loginBtnText}</Button>}>
      <EngLoginForm />
    </Modal>;
}

EngUserTopbar.propTypes = {
  loggedIn: PropTypes.bool
};

EngUserTopbar.defaultProps = {
  loggedIn: false
};