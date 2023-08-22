import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Card} from 'react-native-paper';
import {useCart} from '../contexts/cart/CartContext';

type PropsType = {
  navigation:any
};

export const Cart = (props: PropsType) => {
  const {
    state: {items, totalAmount},
    addToCart,
    decreaseQuantity,
    removeFromCart,
  } = useCart();
  return (
    <>
      <FlatList
      testID={'cartList'}
        data={Object.values(items)}
        renderItem={({item}) => (
          <Card
            onPress={() =>
              props.navigation.push('ProductDetail', {product: item})
            }
            style={{margin: 8, flex: 1}}>
            <Card.Cover source={{uri: item.img}} />
            <Card.Title title={item.name} subtitle={`Price: $${item.price}`} />
            <Card.Title title={`Quantity: ${item.quantity}`} />
            <Card.Actions>
              <Button
                onPress={() => {
                  decreaseQuantity(item);
                }}>
                -
              </Button>
              <Text>{item.quantity}</Text>
                  {/* <Card.Title title={`${item.quantity}`} /> */}
              <Button
                onPress={() => {
                  addToCart(item);
                }}>
                +
              </Button>
              <Button
              buttonColor={"red"}
                onPress={() => {
                  removeFromCart(item);
                }}>
               X
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
      <Card style={{margin: 16, marginBottom: 50}}>
        <Card.Title title={`Total: $${Number(totalAmount).toFixed(2)}`} />
      </Card>
    </>
  );
};

const styles = StyleSheet.create({});
