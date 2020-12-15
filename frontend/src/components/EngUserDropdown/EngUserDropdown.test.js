import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import { EngUserDropdown} from './EngUserDropdown';

const setUp = (props = {}) => {
    const component = shallow(<EngUserDropdown {...props} />);
    return component;
};

describe('EngUserDropdown', () => {
    let component;
    const loggedIn = true;

    beforeEach(() => {
        component = setUp();
    });

    it('matches the snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('should render correctly in "debug" mode', () => {
        const component = shallow(<EngUserDropdown debug />);
        expect(component).toMatchSnapshot();
    });
    
    it('should render correctly with no props', () => {
        const component = shallow(<EngUserDropdown />);
        
        expect(component).toMatchSnapshot();
    });

    it('should render correctly with boolean prop', () => {
        const component = shallow(<EngUserDropdown loggedIn={loggedIn} />);
        expect(component).toMatchSnapshot();
    });

    it('it should contain user-dropdown element', () => {
        const wrapper = component.find('.user-dropdown');
        expect(wrapper.length).toBe(1);
    });

    it('it should contain dropdown', () => {
        const wrapper = mount(
          <MemoryRouter>
            <EngUserDropdown loggedIn={loggedIn} />
          </MemoryRouter>);
        expect(wrapper.find('div[role="listbox"]').length).toBe(1);
    });
});