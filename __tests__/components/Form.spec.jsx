import React from 'react';
import { shallow } from 'enzyme';
import Form from '../../src/components/Form';

describe('Form component', () => {
  it('should render correctly', () => {
    const component = shallow(<Form />);
    expect(component).toMatchSnapshot();
  });
});
