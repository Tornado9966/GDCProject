import { Item } from 'semantic-ui-react';
import React from 'react';
import {amountText} from 'constants/text-constants';

const EngOrderPaymentDishItem = props => {
  const {image, name, amount} = props;
  return (
    <Item>
      <Item.Image size='tiny' src={image} />
    <Item.Content verticalAlign='middle'>
      <Item.Header as='a'>{name}</Item.Header>
      <Item.Meta>{amountText+amount}</Item.Meta>
    </Item.Content>
    </Item>
  );
};

export default EngOrderPaymentDishItem;