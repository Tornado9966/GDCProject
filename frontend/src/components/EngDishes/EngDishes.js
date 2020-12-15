import React, { useState, useEffect, Fragment } from 'react';
import { Card } from 'semantic-ui-react';
import {
  map as _map,
  slice as _slice
} from 'lodash';
import PropTypes from 'prop-types';

import useOrder from 'context/useOrder';
import EngDishCard from 'components/EngDishCard';
import EngNavigationButton from 'components/EngNavigationButton';
import { getFilteredDishes } from 'services/http-client/dishes';
import { linkToMenu } from 'constants/text-constants';
import { menu } from 'config/menu-config';
import findById from './utils/findById';

export function EngDishes({filter, count, category, cardsPerRow, dishToShow}) {
  
  const [dishes, setDishes] = useState([]);
  const { state : {dishes: selectedDishes} } = useOrder();
  const [ visibleDishes, setVisibleDishes ] = useState(dishToShow); 

  useEffect(() => {
    getFilteredDishes(filter, count, category)
      .then(res => setDishes(
          _map(res.data, value => {
            return findById(value._id, selectedDishes) ? 
              {...value, selected: true} : value;
          }))
        );
  }, [filter, category, count, selectedDishes]);

  return (
    <Fragment>
      <Card.Group
        centered
        itemsPerRow={cardsPerRow}
        className='eng-dishes'
      >
      {
        _map(_slice(dishes, 0, visibleDishes), dish => {
          const { _id } = dish;
          return (
            <EngDishCard
              key={_id}
              {...dish}
            />
          );
        })
      }
      </Card.Group>
      {dishes.length ?
        <div className='button-wrapper'>
          {dishes.length >= visibleDishes ?
            <EngNavigationButton
              link={linkToMenu}
              text={menu.showMoreButton}
              onClick={() => setVisibleDishes(visibleDishes + dishToShow)}
            />
          :
            <EngNavigationButton
              link={linkToMenu}
              text={menu.showLessButton}
              onClick={() => setVisibleDishes(visibleDishes - dishToShow)}
            />
          }
        </div>
      :
        null
      }
    </Fragment>
  );
}

EngDishes.propTypes = {
  count: PropTypes.number,
  cardsPerRow: PropTypes.number,
  filter: PropTypes.string, 
  category: PropTypes.string,
  dishToShow: PropTypes.number
};

EngDishes.defaultProps = {
  count: 0,
  cardsPerRow: 3,
  filter: 'unfiltered', 
  category: 'All',
  dishToShow: 3
};
