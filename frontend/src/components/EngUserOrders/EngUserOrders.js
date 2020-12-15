import React from 'react';
import { Redirect } from 'react-router-dom';
import { map as _map } from 'lodash';

import EngListRestaurant from 'components/EngUserOrders/EngListRestaurant';
import EngUserOrdersNotification from 'components/EngUserOrders/EngUserOrdersNotification';
import { sendUserInfo } from 'components/EngUserOrders/utils';

class EngUserOrders extends React.Component {

    state = { restAndOrders: [] }

    componentDidMount() {
        this.sendUserObject()
            .then(restaurants => this.setState({ restAndOrders: restaurants.data }));
    }

    sendUserObject = () => {
        const { email } = this.props;
        return sendUserInfo(email);
    }

    render() {
        const { loggedIn } = this.props;
        return (
            !loggedIn
                ? (<Redirect to='/login' />)
                : (
                    this.state.restAndOrders.length > 0 ?
                        <div>
                            {
                                _map(this.state.restAndOrders, el =>
                                    <EngListRestaurant key={el._id} data={el} />
                                )
                            }
                        </div>
                        : <EngUserOrdersNotification />
                )
        );
    }
}

export default EngUserOrders;