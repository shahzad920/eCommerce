/**
 * @format
 */

import 'react-native';
import React from 'react';
import {ProductDetail} from '..';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Product Detail Renders Correctly', () => {
  const route = {
    params: {
      product: {
        img: '',
        name: 'Product',
        price: '891',
      },
    },
  };
  const tree = renderer.create(<ProductDetail route={route} />);

  expect(tree.toJSON()).toMatchSnapshot();
});
