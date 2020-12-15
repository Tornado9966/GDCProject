import React, { useState, Fragment } from 'react';
import {
  Card, Icon, Image, Rating
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import useOrder from 'context/useOrder';
import EngNavigationButton from 'components/EngNavigationButton';
import EngDishModal from 'components/EngDishModal';
import { maxRating } from 'constants/number-constants';
import { add, remove, linkToMenu } from 'constants/text-constants';

import defaultImage from './default.jpg';

import './styles.scss';

export function EngDishCard(
  {
    _id,
    name, 
    image, 
    stars, 
    price, 
    selected: initialSelected, 
    ingredients: initialIngredients
  }) {

  const { setItem, deleteItem } = useOrder();
  const [ isModalOpen, toggleModal ] = useState(false);
  const [ selected, toggleSelected ] = useState(initialSelected);
  const [ ingredients, setIngedients ] = useState(initialIngredients);

  const cardClasses = classnames('dish-card', {
    'selected': selected
  });

  return (
    <Fragment>
      <Card className={cardClasses}>
        <Image
          onClick={() => toggleModal(true)}
          className="dish-card-image"
          src={image}
        />
        <Card.Content className="dish-card-content">
          <Card.Header>{name}</Card.Header>
          <Rating 
            disabled
            icon="star"
            className="dish-card-rating"
            defaultRating={stars}
            maxRating={maxRating}
          />
        </Card.Content>
        <Card.Content extra className="dish-card-extra">
          <Icon
            className="dish-card-price"
            name="dollar sign"
          >
            {price}
          </Icon>
          {selected && 
            <EngNavigationButton 
              className="navigation-button" 
              text={remove}
              link={linkToMenu}
              onClick={() => {
                toggleSelected(false);
                return deleteItem(_id);
              }}
            />
          }
          {!selected &&
            <EngNavigationButton 
              className="navigation-button" 
              link={linkToMenu}
              text={add}
              onClick={() => {
                toggleSelected(true);
                return setItem({_id, name, image, price, stars, ingredients});
              }}
            />
          }
        </Card.Content>
      </Card>
      <EngDishModal
        name={name}
        image={image}
        isModalOpen={isModalOpen}
        ingredients={ingredients}
        handleChange={ingredient => {
          const { checked } = ingredients[ingredient];
          const obj = {
            ...ingredients,
            [ingredient]: {disabled: false, checked: !checked}
          };
          return setIngedients(obj);
        }}
        handleClose={() => toggleModal(false)}
        handleAdd={() => {
          toggleSelected(true);
          toggleModal(false);
          return setItem({_id, name, image, price, stars, ingredients});
        }}
      />
    </Fragment>
    );
}

EngDishCard.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  ingredients: PropTypes.object,
  image: PropTypes.string,
  stars: PropTypes.number
};

EngDishCard.defaultProps = {
  stars: 0,
  ingredients: {},
  image: defaultImage
};
