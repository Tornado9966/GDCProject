import React, { useState } from 'react';
import {
    Form, Header, Responsive
} from 'semantic-ui-react';
import {
    DateInput
} from 'semantic-ui-calendar-react';
import { enterInform } from 'constants/text-constants';
import useOrder from 'context/useOrder';
import { isInvalid } from 'components/utils/isInvalid';

export const EngOrderTableForm = () => {
  const {setTableStep: handleChange,
    state: {
    tables: {
      date = '', time = '', guests = ''
    }, 
  } } = useOrder();

  const onValid = (field, value) => {
     let errorMessage;
      if(new Date(date) < new Date() && field === 'time'){
        const [hours] = value.split(':').map(Number);
        const isValidTime = hours > Number(new Date().getHours());
        if (!isValidTime){
          errorMessage = 'It is too late! You chose time that is already passed';
        }
      }
      const isValidTime = isInvalid(value, field);
      if(isValidTime){
        errorMessage = isValidTime;
      }
     if (field === 'guests') {
        errorMessage ? setCurrentGuests(errorMessage) : setCurrentGuests('');
     } else if (field === 'time') {
        errorMessage ? setCurrentTime(errorMessage) : setCurrentTime('');
     }
  };
  const validation = (name, value) => {
    onValid(name, value);
    handleChange(name, value);
  };

  const [currentGuests, setCurrentGuests] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const todayDate = new Date();

  return (
    <div>
      <Header as='h2'>{enterInform}</Header>
      <Form className="bookTablePage__form">
  
        <DateInput
          id='date-input'
          label=''
          name="date"
          placeholder="Date"
          dateFormat='MM-DD-YYYY'
          value={date}
          iconPosition="left"
          onChange={(event, { name, value }) => handleChange(name, value)}
          minDate={todayDate}
        />
      <Responsive minWidth={320} maxWidth={992}>
        <Form.Input
          id='date-input'
          label=''
          name="date"
          placeholder="Date"
          value={date}
          icon='calendar alternate outline'
          iconPosition="left"
          onChange={(event, { name, value }) => handleChange(name, value)}
        />
      </Responsive>

        <Form.Input
         label={`${currentTime || ''}`}
          icon='time'
          name="time"
          placeholder="00:00"
          value={time}
          iconPosition="left"
          onChange={(event, { name, value }) => validation(name, value)}
        />
        <Form.Input
          label={`${currentGuests || ''}`}
          icon='users'
          name="guests"
          iconPosition='left'
          placeholder='Guests'
          onChange={(event, { name, value }) => validation(name, value)}
          value={guests}
        />
      </Form>
    </div>
  );
};
