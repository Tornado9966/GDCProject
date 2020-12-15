import React, {Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Progress } from 'semantic-ui-react';

import {orderSteps} from 'constants/text-constants';
import useOrder from 'context/useOrder';
import EngOrderRestaurant from 'components/EngOrderRestaurants';
import EngOrderTable from 'components/EngOrderTable';
import EngTotalOrderList from 'components/EngTotalOrderList';
import EngOrderPayment from 'components/EngOrderPayment';

import './style.scss';

export const EngOrder = () => {

  const {
    state:{currentStep, payment},
    setStep,
    isRestaurantDataFilled,
    isTablesDataFilled,
    isMenuDataFilled,
    userMadePayment
  } = useOrder();

  const getOrderStep = () => {
    switch (currentStep) {
      case orderSteps[0]:
        return <EngOrderRestaurant />;
      case orderSteps[1]:
        return <EngOrderTable />;
      case orderSteps[2]:
        return <EngTotalOrderList />;
      case orderSteps[3]:
        return <EngOrderPayment />;
      default: return <EngOrderRestaurant />;
    }
  };

  const previousStep = () => {
    const currentIndex = orderSteps.indexOf(currentStep);
    const index = (currentIndex-1);
    if(index >= 0){
      setStep(orderSteps[index]);
    }
  };

  const nextStep = () => {
    const currentIndex = orderSteps.indexOf(currentStep);
    const index = (currentIndex+1);
    const totalSteps = orderSteps.length;
    if(index < totalSteps) {
      setStep(orderSteps[index]);
    }
  };

  const isPreviousBtnDisable = () => {
    return orderSteps.indexOf(currentStep) === 0;
  };

  const isNextBtnDisable = () => {
    switch (currentStep) {
      case orderSteps[0]: return !isRestaurantDataFilled();
      case orderSteps[1]: return !isTablesDataFilled();
      case orderSteps[2]: return !isMenuDataFilled();
      default: return true;
    }
  };

  const orderSubmitRedirect = done => {
    if(done){
      userMadePayment();
      return <Redirect to='/myorders' />;
    }
  };

  return (
    <Fragment>
      {orderSubmitRedirect(payment)}
      <Progress
        active
        autoSuccess
        value={orderSteps.indexOf(currentStep)+1}
        total={orderSteps.length}
        progress='ratio'
      />

      {getOrderStep()}

      <div className='steps-btns'>
        <Button
          className='previous'
          onClick={previousStep}
          content='Previous'
          icon='left arrow'
          labelPosition='left'
          disabled={isPreviousBtnDisable()}
        />
        <Button
          className='next'
          onClick={nextStep}
          content='Next'
          icon='right arrow'
          labelPosition='right'
          disabled={isNextBtnDisable()}
        />
      </div>
    </Fragment>
  );
};
