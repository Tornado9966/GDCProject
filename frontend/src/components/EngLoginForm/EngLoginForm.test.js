import React from 'react';
import { shallow } from 'enzyme';

import { EngLoginForm } from './EngLoginForm';

const setUp = (props = {}) => {
    const component = shallow(<EngLoginForm {...props} />);
    return component;
};

describe('EngLoginForm', () => {
    let component;
    const props = {
      loggedIn: false,
      loading: false,
      showError: false
    };

    beforeEach(() => {
        component = setUp();
    });

    it('matches the snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<EngLoginForm debug />);
        expect(component).toMatchSnapshot();
    });
    
    it('should render correctly with no props', () => {
        const component = shallow(<EngLoginForm />);
        
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with boolean prop', () => {
        const component = shallow(<EngLoginForm {...props} />);
        expect(component).toMatchSnapshot();
    });

    it('it should contain login-wrap element', () => {
        const wrapper = component.find('.login-wrap');
        expect(wrapper.length).toBe(1);
    });
});