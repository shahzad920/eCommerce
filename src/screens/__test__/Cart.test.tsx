/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Cart } from '..';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Cart Screen Renders Correctly', () => {

    const tree = renderer.create(<Cart test />).toJSON();

    expect(tree).toMatchSnapshot();
});
