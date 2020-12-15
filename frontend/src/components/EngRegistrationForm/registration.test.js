import React from 'react';
import { shallow } from 'enzyme';
import { EngRegistrationForm } from './EngRegistrationForm';

const setUp = (props = {}) => {
    const component = shallow(<EngRegistrationForm {...props} />);
    return component;
};

describe('Registration component', () => {

    let component;
    beforeEach(() => {
        component = setUp();
    });

    it('it should render without errors', () => {
        const wrapper = component.find('.register-container');
        expect(wrapper.length).toBe(1);
    });

    it('it should have a class register-header', () => {
        const wrapper = component.find('.register-header');
        expect(wrapper.length).toBe(1);
    });

    it('render component Registration Form', () => {
        const component = shallow(<EngRegistrationForm />);
        expect(component).toHaveLength(1);
    });
});


