import React from 'react';
import { shallow } from 'enzyme';

import Shelf from '../src/cart/Shelf';

describe('HelloWorld', () => {
  it('renders without crashing', () => {
    const component = shallow(
      <Shelf />
    );
 });
});
