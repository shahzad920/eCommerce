import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as Screens from './screens';
import {Provider as CartProvider} from './contexts/cart/CartContext';
import { Button } from 'react-native-paper';

type Props = {};

const Stack = createStackNavigator();

const options = ({navigation}:any)=>({headerRight:()=><Button onPress={()=>navigation.push("Cart")} >Cart</Button>})

export default (props: Props) => {

  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={options} component={Screens.Products} name="Products" />
          <Stack.Screen
          options={options}
            component={Screens.ProductDetail}
            name="ProductDetail"
          />
          <Stack.Screen component={Screens.Cart} name="Cart" />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};
