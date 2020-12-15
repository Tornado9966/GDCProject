import React from 'react';
import {Link} from 'react-router-dom';
import { List, Button, Icon} from 'semantic-ui-react';
import { map as _map } from 'lodash';

import { orderList, linkToMenu, addMoreButton, total } from 'constants/text-constants';
import EngOrderList  from 'components/EngOrderList';

import './style.scss';
import useOrder from 'context/useOrder';

export const EngTotalOrderList = () => {
  const {state: {dishes, totalPrice}} = useOrder();
  return (
    <div className='order-list-wrapper'>
      <h2>{orderList}</h2>
      <List className='order__list'>
        {_map(dishes, dish => <EngOrderList key={dish._id} {...dish} />
        )}
        <List.Content className='list__header list__content'>
          <List.Description className='total'>{total}</List.Description>
          <Icon className='dollar sign' />
          <List.Description className='total-price'>{totalPrice}</List.Description>
        </List.Content>
      </List>
      <Link to={linkToMenu}>
        <Button className='add-button' onClick={()=>{}}>
          {addMoreButton}
        </Button>
      </Link>
    </div>
  );
};
