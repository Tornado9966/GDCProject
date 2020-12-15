import React from 'react';
import {Button} from 'semantic-ui-react';
import {PropTypes} from 'prop-types';
import './style.scss';


export const EngCounterButton = ({amount, decrementCounter, incrementCounter}) => {
    return (
        <Button.Group>
            <Button className='minus-button' icon='minus circle' onClick={decrementCounter} />
            <Button.Or text={amount} />
            <Button className='plus-button' icon='plus circle' onClick={incrementCounter}  />
        </Button.Group>
    );
};

EngCounterButton.propTypes ={
    amount: PropTypes.number
};
EngCounterButton.defaultProps = {
    amount:1
};
