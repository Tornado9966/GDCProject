import React from 'react';
import {List, Image, Rating, Icon, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

import EngDeleteButton from 'components/EngDeleteButton';
import EngCounterButton from 'components/EngCounterButton';
import useOrder from 'context/useOrder';

import './style.scss';
import defaultImage from './default.jpg';

export const EngOrderList = props => {
  const {deleteItem, incrementCounter, decrementCounter} = useOrder();
  const {_id, image, name, stars, amount, maxRating, totalPrice} = props;
  return (
    <List.Item className='list__items' key={_id}>
      <Image className='list__image' size='small' src={image} />
      <List.Content className='list__header list__content'>
        <List.Header>{name}</List.Header>
        <List.Description>
          <Rating
            icon="star"
            defaultRating={stars}
            maxRating={maxRating}
            disabled
          />
        </List.Description>
      </List.Content>
      <List.Description>
        <EngCounterButton
          incrementCounter={()=>incrementCounter(_id)}
          decrementCounter={()=>decrementCounter(_id)}
          amount={amount}
        />
      </List.Description>
      <List.Description>
        <Icon name="dollar sign">
          {totalPrice}
        </Icon>
      </List.Description>
      <List.Description>
        <Button.Group>
          <EngDeleteButton deleteItem={() => deleteItem(_id)} />
        </Button.Group>
      </List.Description>
    </List.Item>
  );
};

EngOrderList.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    price: PropTypes.number.isRequired,
    stars: PropTypes.number,
    amount: PropTypes.number,
    maxRating: PropTypes.number,
    quantity: PropTypes.number
};

EngOrderList.defaultProps = {
    image: defaultImage,
    stars: 0,
    amount: 1,
    maxRating: 5,
    quantity: 3
};
