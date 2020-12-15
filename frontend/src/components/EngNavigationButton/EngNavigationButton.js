import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

export function EngNavigationButton({ link, floated, text, onClick, className, icon }) {
  return (
    <Link to={link}>
      <Button 
        floated={floated} 
        className={className}
        onClick={onClick}
        icon={icon}
        content={text}
      />
    </Link>
  );
}

EngNavigationButton.propTypes = {
  link: PropTypes.string.isRequired,
  className: PropTypes.string,
  text: PropTypes.string,
  floated: PropTypes.string, 
  onClick: PropTypes.func
};

EngNavigationButton.defaultProps = {
  floated: 'right',
  className: 'navigation-button',
  text: '', 
  onClick: () => {}
};
