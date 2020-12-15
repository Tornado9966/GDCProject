import React from 'react';
import PropTypes from 'prop-types';
import { Rating, Item } from 'semantic-ui-react';

import { maxRating } from 'constants/number-constants';

import './styles.scss';

const EngListDishInOrders = (props) => {

    const { image, name, price, amount, ratingUser } = props.dish;
    const { rate, orderid, id } = props;
    return (
        <Item.Group divided>
            <Item>
                <Item.Image size='tiny' src={image} />
                <Item.Content>{name}</Item.Content>
                <Item.Content>{`$${price}`}</Item.Content>
                <Item.Content>{amount}</Item.Content>
                <Item.Content>
                    <Rating
                        icon='star'
                        name={name}
                        id={id}
                        defaultRating={ratingUser}
                        maxRating={maxRating}
                        onRate={rate}
                        orderid={orderid}
                    />
                </Item.Content>
            </Item>
        </Item.Group>
    );
};

EngListDishInOrders.propTypes = {
    dish: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    orderid: PropTypes.string.isRequired,
    rate: PropTypes.func.isRequired
};

export default EngListDishInOrders;