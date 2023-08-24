/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Cart } from '../src/screens';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Cart test />).toJSON();

    expect(tree).toMatchSnapshot();
});
