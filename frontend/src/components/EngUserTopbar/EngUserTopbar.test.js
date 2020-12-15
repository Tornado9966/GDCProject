import React from 'react';
import { shallow } from 'enzyme';

import { EngUserTopbar } from './EngUserTopbar';

const setUp = (props = {}) => {
    const component = shallow(<EngUserTopbar {...props} />);
    return component;
};

describe('EngUserTopbar', () => {
    let component;
    const loggedIn = true;

    beforeEach(() => {
        component = setUp();
    });

    it('matches the snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<EngUserTopbar debug />);
        expect(component).toMatchSnapshot();
    });
    
    it('should render correctly with no props', () => {
        const component = shallow(<EngUserTopbar />);
        
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with boolean prop', () => {
        const component = shallow(<EngUserTopbar loggedIn={loggedIn} />);
        expect(component).toMatchSnapshot();
    });
});