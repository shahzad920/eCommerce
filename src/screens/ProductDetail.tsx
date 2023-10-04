import React from 'react'
import { Button, Card } from 'react-native-paper'
import { useCart } from '../contexts/cart/CartContext'

type PropsType = {
    route?: any
    test?: boolean
}
export const ProductDetail = ({ route }: PropsType) => {
    const cart = useCart();

    const item = route.params.product
    return (
        <Card
            testID='Product-Detail'
            style={{ flex: 1 }}>
            <Card.Cover source={{ uri: item.img }} />
            <Card.Title titleNumberOfLines={2} title={item.name} subtitle={`Price: $${item.price}`} />
            <Card.Actions >
                <Button
                    testID='Button-Add-To-Cart'
                    onPress={() => {
                        cart.addToCart(item)
                    }} >Add To Cart</Button>
            </Card.Actions>
        </Card>
    )
}