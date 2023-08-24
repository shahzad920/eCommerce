/**
 * @format
 */

import 'react-native';
import React from 'react';
import { ProductDetail } from '../src/screens';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<ProductDetail test />).toJSON();

    expect(tree).toMatchSnapshot();
});
