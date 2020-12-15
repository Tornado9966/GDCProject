import {useContext} from 'react';
import { isEmpty as _isEmpty } from 'lodash';

import saveOrder from './utils/saveOrder';
import {EngOrderContext, initialContextState} from './EngOrderContext';
import { orderSteps } from '../constants/text-constants';

const useOrder = () => {
  const [state, setState] = useContext(EngOrderContext);
  
  const calculateTotalPrice = dishes =>
    dishes.reduce((total, dish) => dish.totalPrice + total, 0);

  const setRestaurantStep = (_id, name, imageSrc, location) => {
    setState({
      ...state,
      restaurants: {
        _id,
        name,
        imageSrc,
        location
      },
    });
    resetTablesInRestaurant();
  };

  const setTableStep = (field, value) => {
    setState(state => ({
      ...state,
      tables: {
        ...state.tables,
        [field]: value
      }
    }));
  };

  const setDishesStep = (dishes) => {
    const totalPrice = calculateTotalPrice(dishes);
    setState(state => ({
      ...state,
      dishes: [...dishes],
      totalPrice: totalPrice
    }));
  };

  const resetTablesInRestaurant = () => {
    setTableStep('id', 0);
    setStep(orderSteps[1]);
  };

  const incrementCounter = _id => {
    setState(state => {
      const index = state.dishes.findIndex(dish => dish._id===_id);
      const dish = state.dishes[index];
      dish.amount++;
      dish.totalPrice = dish.amount * dish.price;
      state.dishes[index] = dish;
      state.totalPrice = calculateTotalPrice(state.dishes);
      return ({
        ...state
      });
    });
  };

  const decrementCounter = _id => {
    setState(state => {
      const index = state.dishes.findIndex(dish => dish._id===_id);
      const dish = state.dishes[index];
      if(dish.amount>1){
        dish.amount--;
      } else dish.amount = 1;
      dish.totalPrice = dish.amount * dish.price;
      state.dishes[index] = dish;
      state.totalPrice = calculateTotalPrice(state.dishes);
      return ({
        ...state
      });
    });
  };

  const deleteItem = _id => {
    setState( state => {
      const dishes = [...state.dishes];
      const index = dishes.findIndex(element => element._id === _id);
      dishes.splice(index, 1);
      return {
        ...state,
        dishes: [...dishes],
        totalPrice: calculateTotalPrice(dishes)
      };
    });
  };

  const setItem = newDish =>
    setState( state => {
      let setData;
      let dishIndex = undefined;

      if(newDish.amount===undefined) {
        newDish.amount = 1;
      }

      state.dishes.forEach((dish, index) => {
        if(dish._id===newDish._id) dishIndex = index;
      });

      if(dishIndex!==undefined){
        setData = state.dishes;
        setData[dishIndex].amount+=newDish.amount;
        setData[dishIndex].totalPrice = setData[dishIndex].amount * setData[dishIndex].price;
      } else {
        newDish.totalPrice = newDish.amount * newDish.price;
        setData = [...state.dishes, newDish];
      }
      const totalPrice = calculateTotalPrice([...setData]);
      return {
        ...state, 
        dishes: setData,
        totalPrice
      };
    });

  const userMadePayment = () => {
    const {restaurants, dishes, tables, totalPrice, payment, userEmail} = state;
    saveOrder('/order', {
      restaurants,
      dishes,
      tables,
      totalPrice,
      payment,
      userEmail
    }).then(()=>{
      setState(initialContextState);
    });
  };

  const submitOrder = userEmail => {
    setState(state => ({
      ...state,
      userEmail,
      payment: true,
    }));
  };

  const isRestaurantDataFilled = () => {
    const {_id, name} = state.restaurants;
    return state.restaurants && _id && name;
  };

  const isTablesDataFilled = () => {
    const {id, date, time }  = state.tables;
    if(state.tables && id && date && time){
      return true;
    } else return false;
  };

  const isMenuDataFilled = () => {
    return !_isEmpty(state.dishes);
  };

  const setStep = step => {
    setState(state => ({
      ...state,
      currentStep: step
    }));
  };

  return {
    state,
    setStep,
    calculateTotalPrice,
    setTableStep,
    setDishesStep,
    setRestaurantStep,
    decrementCounter,
    incrementCounter,
    setItem,
    deleteItem,
    submitOrder,
    isTablesDataFilled,
    isMenuDataFilled,
    isRestaurantDataFilled,
    resetTablesInRestaurant,
    userMadePayment
  };
};

export default useOrder;
