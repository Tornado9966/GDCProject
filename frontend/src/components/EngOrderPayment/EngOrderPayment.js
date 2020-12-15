import React from 'react';
import { Grid, Item, Icon, Header } from 'semantic-ui-react';
import {map as _map} from 'lodash';

import {logo, userOrderedinRest, totalPriceText} from 'constants/text-constants';
import useOrder from 'context/useOrder';
import EngOrderPaymentDishItem from './EngOrderPaymentDishItem';
import EngOrderPaymentButton from './EngOrderPaymentButton';
import './style.scss';

export const EngOrderPayment = () => {
  const {state: { restaurants, dishes, tables, totalPrice }} = useOrder();
  return (
    <Grid centered>
      <Item>
        <Item.Image size='medium' src={logo} />
        <Item.Content>
          <Item.Meta>
            <Header as='h5' className='info-item'><Icon className='food' />
              {userOrderedinRest+restaurants.name}
            </Header>
            <Header as='h5' className='info-item'><Icon className='calendar times' /> {tables.date}</Header>
            <Header as='h5' className='info-item'><Icon className='time' /> {tables.time}</Header>
            <Item.Group>
              {
                _map(dishes,dish => <EngOrderPaymentDishItem key={dish._id} {...dish} />)
              }
            </Item.Group>
          </Item.Meta>
          <Header as='h4' className='info-item total'>
            {totalPriceText+totalPrice}
            <Icon className='dollar sign' />
          </Header>
        </Item.Content>
        <EngOrderPaymentButton />
      </Item>
    </Grid>);
};

