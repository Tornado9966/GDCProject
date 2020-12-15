import React from 'react';
import { Link, MemoryRouter } from 'react-router-dom';

import { shallow, mount } from 'enzyme';
import { EngPlaceCard } from './EngPlaceCard';

const setUp = (place) => {
  return shallow(<EngPlaceCard {...place} />);
};

describe('Registration component', () => {
  let component;
  const place = {
    _id : '1',
    name: 'Restaurant',
    location: 'Some Street',
    workingHours: '9am to 9 pm',
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/eatngo-fbbeb.appspot.com/o/photo_2019-07-10_09-55-43.jpg?alt=media&token=5c94c1c7-9c2c-41f1-ab7a-7f2173966c2d'
  };

  beforeEach(() => {
    component = setUp(place);
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('it should contain place-card element', () => {
    const wrapper = component.find('.place-card');
    expect(wrapper.length).toBe(1);
  });

  it('it should contain place-card-location element with corresponding text', () => {
    const wrapper = component.find('.place-card-location');
    const location = [...wrapper][0].props.children;
    expect(wrapper.length).toBe(1);
    expect(location).toBe(place.location);
  });

  it('it should contain place-card-image element with corresponding image', () => {
    const wrapper = component.find('.place-card-image');
    const image = [...wrapper][0].props.src;
    expect(wrapper.length).toBe(1);
    expect(image).toBe(place.imageSrc);
  });

  it('it should contain place-card-workingHours element with corresponding text', () => {
    const wrapper = component.find('.place-card-workingHours');
    const workingHours = [...wrapper][0].props.children;
    expect(wrapper.length).toBe(1);
    expect(workingHours).toBe(`Working hours: ${place.workingHours}`);
  });

  it('it should contain div with two buttons', () => {
    const wrapper = component.find('.ui.two.buttons');
    expect(wrapper.length).toBe(1);
  });

  it('it should contain two buttons', () => {
    const wrapper = mount(
      <MemoryRouter>
        <EngPlaceCard {...place} />
      </MemoryRouter>);
    expect(wrapper.find('a[role="button"]').length).toBe(2);
  });

  it('it should contain two buttons with corresponding links', () => {
    const wrapper = mount(
      <MemoryRouter>
        <EngPlaceCard {...place} />
      </MemoryRouter>);

    const links = [...wrapper.find(Link)];
    expect(links[0].props.to).toBe('/restaurants');
    expect(links[1].props.to).toBe('/order');
  });
});
