import React from 'react';
import { Button, Header, Icon, Segment } from 'semantic-ui-react';
import { createFirstOrder, linkToBookTable, addFirstOrder } from 'constants/text-constants';

import './styles.scss';

export const EngUserOrdersNotification = () => (
    <Segment placeholder>
        <Header icon>
            <Icon name='utensils' />
            {createFirstOrder}
        </Header>
        <Button className='emptyOrder-button'>
            <a href={linkToBookTable}>{addFirstOrder}</a>
        </Button>
    </Segment>
);