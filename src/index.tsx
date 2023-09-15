import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import * as Screens from './screens';
import {Provider as CartProvider} from './contexts/cart/CartContext';
import {Button} from 'react-native-paper';

type Props = {};
const Stack = createStackNavigator();
const options =(showCart:boolean,showBack:boolean)=> ({navigation}: any) => ({
  headerRight: () => showCart?(
    <Button testID="Cart-Button" onPress={() => navigation.push('Cart')}>
      Cart
    </Button>
  ):null,
  headerLeft: () => showBack?(
    <Button testID="Back-Button" onPress={() => navigation.pop()}>
      Back
    </Button>
  ):null,
});

export default (props: Props) => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={options(true,false)}
            component={Screens.Products}
            name="Products"
            />
          <Stack.Screen
          
          options={options(true,true)}
          component={Screens.ProductDetail}
          name="ProductDetail"
          />
          <Stack.Screen
          options={options(false,true)}
           component={Screens.Cart} name="Cart" />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};
