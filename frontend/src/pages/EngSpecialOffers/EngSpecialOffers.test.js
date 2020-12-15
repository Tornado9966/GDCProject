import React from 'react';
import {shallow, mount} from 'enzyme';

import {EngSpecialOffers} from './EngSpecialOffers';

const setUp = (props = {}) => {
    const component = shallow(<EngSpecialOffers {...props} />);
    return component;
};
describe('EngSpecialOffers', () => {
    let component;
    const offers = {
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/eatngo-72705.appspot.com/o/breakfast.jpg?alt=media&token=776476df-1efb-43ba-9a0f-a3bf5938c155',
        title: 'Discount',
        summary: 'Discount',
        details: 'More about discount'
    };
    beforeEach(() => {
        component = setUp();
    });
    it('renders correctly', () => {
        expect(component).toMatchSnapshot();
      });    
    it('render component EngSpecialOffers', () => {
        const component = shallow(<EngSpecialOffers />);
        expect(component).toHaveLength(1);
    });
    it('should exist' ,() => {
        const component = mount(<EngSpecialOffers offers={offers} />);
        expect(component.props().offers).toEqual(offers);
   });
});