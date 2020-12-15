import StripeCheckout from 'react-stripe-checkout';
import React from 'react';

import useOrder from 'context/useOrder';
import { connect } from 'react-redux';
import {logo} from 'constants/text-constants';
import { apiKey } from './utils/paymentData';

const EngOrderPaymentButton = ({userEmail}) => {
  const { state: { totalPrice }, submitOrder } = useOrder();

  return (
    <StripeCheckout
      className='payment'
      amount={totalPrice * 100}
      description='Your bill'
      image={logo}
      locale='auto'
      name='EATNGO'
      stripeKey={apiKey}
      token={() => submitOrder(userEmail)}
      zipcode
      label='Pay with 💳'
    />);
};

const mapStateToProps = state => ({
  userEmail: state.auth.email
});


export default connect(mapStateToProps)(EngOrderPaymentButton);
