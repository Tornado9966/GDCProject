import React from 'react';
import PropTypes from 'prop-types';
import { map as _map } from 'lodash';
import { Label, Image, Icon, List, Button, Header } from 'semantic-ui-react';

import { numberOrder, orderStatus, done, viewDetail } from 'constants/text-constants';
import { sendUserRatingDish } from 'components/EngUserOrders/utils';
import EngListDishInOrders from 'components/EngUserOrders/EngListDishInOrders';

import './styles.scss';

class EngListRestaurant extends React.Component {

    static propTypes = {
        data: PropTypes.object
    }

    static defaultProps = {
        data: {},
    }

    state = { showDetailsList: false };

    showHideDishes = () => {
        return this.setState(prevState => ({ showDetailsList: !prevState.showDetailsList }));
    };

    sendRating = () => {
        const { data: { userEmail } } = this.props;
        sendUserRatingDish(this.state, userEmail);
    };

    handleRate = (e, { name, rating, id, orderid }) => {
        this.setState(({
            idOrder: orderid,
            id: id,
            rating: rating,
            name: name
        }), this.sendRating);
    };

    render() {
        const { data: { restaurants, tables, dishes, _id } } = this.props;
        const tablesDate = tables.date;
        return (
            <div className='myOrderList'>
                <div className='myOrder'>
                    <p className='myOrder__number'>{restaurants.name}, {numberOrder} {tables.id}</p>
                    <div className='myOrder__info'>
                        <Image src={restaurants.imageSrc} />
                        <List>
                            <List.Item>{restaurants.location}</List.Item>
                            <List.Item>{tables.time}</List.Item>
                            <List.Item>{tablesDate}</List.Item>
                        </List>
                        <div className='myOrder__status'>
                            <Header as='h4'> {orderStatus}</Header>
                            {
                                (<Button className='button__done'>
                                    <Icon name='checkmark' />
                                    <Label>{done}</Label>
                                 </Button>)}
                        </div>
                        <Button onClick={this.showHideDishes} className='myOrder__details'>{viewDetail}</Button>
                    </div>
                </div>

                {this.state.showDetailsList &&
                    (_map(dishes, listDish =>
                        <EngListDishInOrders
                            key={listDish._id}
                            dish={listDish}
                            id={listDish._id}
                            orderid={_id}
                            nameDish={this.state}
                            rate={this.handleRate}
                        />
                    ))}
            </div>
        );
    }
}

export default EngListRestaurant;
