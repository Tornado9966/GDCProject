import React from 'react';

import {
  Modal, Button, Image, Header, 
} from 'semantic-ui-react';
import { map as _map, keys as _keys } from 'lodash';
import PropTypes from 'prop-types';

import { 
  add, linkToMenu, close, changeIngredients
} from 'constants/text-constants';

import EngNavigationButton from 'components/EngNavigationButton';
import EngCheckbox from './EngCheckbox';

import './styles.scss';

export function EngDishModal({
  name,
  image,
  isModalOpen, 
  ingredients,
  handleAdd, 
  handleClose, 
  handleChange
}) {
  return (
    <Modal 
      size="tiny"
      open={isModalOpen}
      className="modal"
    >
      <Modal.Header 
        content={changeIngredients}
        className="modal-header" 
      />
      <Modal.Content 
        image 
        className="modal-content"
      >
        <Image 
          wrapped 
          src={image} 
          className="modal-image" 
        />
        <Modal.Description className="modal-description">
          <Header className="modal-description-header">{name}</Header>
          {
            _map(_keys(ingredients),
              (ingredient, index) => {
                const {disabled, checked} = ingredients[ingredient];
                return (
                  <EngCheckbox
                    disabled={disabled}
                    index={index}
                    label={ingredient}
                    key={ingredient}
                    onChange={handleChange}
                    checked={checked}
                  />
                );
              }
            )
          }
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button
          onClick={handleClose}
          className="navigation-button"
        >
          {close}
        </Button>
        <EngNavigationButton 
          link={linkToMenu} 
          text={add} 
          onClick={handleAdd}  
        />
      </Modal.Actions>
    </Modal>
  );
}

EngDishModal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleAdd: PropTypes.func, 
  handleClose: PropTypes.func,
  handleChange: PropTypes.func,
  ingredients: PropTypes.object
};

EngDishModal.defaultProps = {
    handleAdd: () => {},
    handleClose: () => {}, 
    handleChange: () => {}, 
    ingredients: {}
};
