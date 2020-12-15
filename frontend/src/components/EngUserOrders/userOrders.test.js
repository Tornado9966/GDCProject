import React from 'react';
import { shallow } from 'enzyme';
import EngUserOrders from './EngUserOrders';

describe('<EngUserOrders/>', () => {
    it('render component', () => {
        const component = shallow(<EngUserOrders />);
        expect(component).toHaveLength(1);
    });
});
