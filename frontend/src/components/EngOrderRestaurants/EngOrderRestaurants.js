import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { Card, Header } from 'semantic-ui-react';
import classnames from 'classnames';
import { map as _map } from 'lodash';
import EngPlaceCard from 'components/EngPlaceCard';
import {
  chooseRestaurant as chooseRestaurantText,
  chosenRestaurant as chosenRestaurantText} from 'constants/text-constants';
import useOrder from 'context/useOrder';
import { getPlaces } from './utils/get-data/get-places';

import './styles.scss';

export const EngOrderRestaurants = (props) => {
  const {state: {restaurants: {name: chosenRestaurant}}} = useOrder();
  const {itemsPerRow} = props;

  const [state, setState] = useState({});
  useEffect(()=> {
    getPlaces().then(res => setState(res.data));
  }, []);

  const getStyleClassName = (name, chosenRestaurant) =>
    classnames({
      'selected-card': chosenRestaurant===name,
      'unselected-card': chosenRestaurant!==name
    });

  return (
    <div>
      <Header as='h3' className='main-header'>
        {chosenRestaurant ?
          `${chosenRestaurantText+chosenRestaurant}` :
          `${chooseRestaurantText}`
        }
      </Header>
      <Card.Group
        centered
        className="eng-places"
        itemsPerRow={itemsPerRow}
      >
        {_map(state, place =>  (
          <div
            key={place._id}
            className={getStyleClassName(place.name, chosenRestaurant)}
          >
          <EngPlaceCard {...place} />
          </div>))
        }
      </Card.Group>
    </div>
 );
};

EngOrderRestaurants.propTypes = {
  itemsPerRow: PropTypes.number
};

EngOrderRestaurants.defaultProps = {
  itemsPerRow: 3
};

