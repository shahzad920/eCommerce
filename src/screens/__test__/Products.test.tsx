/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Products } from '..';

jest.mock('node-fetch', () => require('fetch-mock-jest').sandbox())

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Product List Screen Renders correctly', () => {
   
 const tree = renderer.create(<Products test/>).toJSON();
    expect(tree).toMatchSnapshot();
});
