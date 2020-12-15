import React from 'react';
import {shallow} from 'enzyme';

import {EngOrderList} from './EngOrderList';

const setUp = (props = {}) => {
    const component = shallow(<EngOrderList {...props} />);
    return component;
};
describe('EngOrderList', () => {
    let component;
    beforeEach(() => {
        component = setUp();
    });
    it('it should render without errors', () => {
        const wrapper = component.find('.list__items');
        expect(wrapper.length).toBe(1);
    });
    it('render component EngOrderList', () => {
        const component = shallow(<EngOrderList />);
        expect(component).toHaveLength(1);
    });
    it('it should contain EngCounterButton element', () => {
        const wrapper = component.find('EngCounterButton');
        expect(wrapper.length).toBe(1);
      });
      it('it should contain EngDeleteButton element', () => {
        const wrapper = component.find('EngDeleteButton');
        expect(wrapper.length).toBe(1);
      });        
    it('it should have a class list__image', () => {
        const wrapper = component.find('.list__image');
        expect(wrapper.length).toBe(1);
    });
});
