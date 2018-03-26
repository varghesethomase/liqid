import React from 'react';
import { shallow } from 'enzyme';
import Button from './index';

it('renders the button', () => {
  const onButtonClick = jest.fn();
  const wrapper = shallow(<Button buttonClick={onButtonClick}>HELLO</Button>);
  expect(wrapper).toMatchSnapshot();
});
