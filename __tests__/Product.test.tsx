/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Products } from '../src/screens';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<Products test />).toJSON();
    expect(tree).toMatchSnapshot();
});
