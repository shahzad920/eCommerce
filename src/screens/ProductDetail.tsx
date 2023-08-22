import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card } from 'react-native-paper'
import { useCart } from '../contexts/cart/CartContext'

type Props = {
  route:any
}

export const ProductDetail = (props: Props) => {
    const item = props.route.params.product
    const {
      state: {items, totalAmount},
      addToCart,
      clearCart,
    } = useCart();
    console.log({items,totalAmount});
    
    return (
    <Card style={{flex:1}}>
    <Card.Cover source={{ uri: item.img }} />
    <Card.Title titleNumberOfLines={2} title={item.name} subtitle={`Price: $${item.price}`}/>
    <Card.Actions >
      <Button onPress={()=>{
        addToCart(item)
      }} >Add To Basket</Button>
    </Card.Actions>

  </Card>
  )
}