import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Button, Card } from 'react-native-paper';
import { useCart } from '../contexts/cart/CartContext';

type PropsType = {
    navigation?: any,
    test?: boolean
};

export const Cart = ({ navigation,test }: PropsType) => {
    const cart = test?{state:{items:[]}}: useCart();
    
    return (
        <>
            <FlatList
                testID={'Cart-List'}
                data={Object.values(cart.state.items)}
                renderItem={({ item }: any) => (
                    <Card
                        testID={'Card-Item'}
                        onPress={() =>
                            navigation.push('ProductDetail', { product: item })
                        }
                        style={{ margin: 8, flex: 1 }}>
                        <Card.Cover source={{ uri: item.img }} />
                        <Card.Title title={item.name} subtitle={`Price: $${item.price}`} />
                        <Card.Title title={`Quantity: ${item.quantity}`} />
                        <Card.Actions>
                            <Button
                                testID='Button-Decrease-Quantity'
                                onPress={() => {
                                    cart.decreaseQuantity(item);
                                }}>
                                -
                            </Button>
                            <Text  testID='Button-Quantity'>{item.quantity}</Text>
                            {/* <Card.Title title={`${item.quantity}`} /> */}
                            <Button
                                testID='Button-Add-To-Cart'
                                onPress={() => {
                                    cart.addToCart(item);
                                }}>
                                +
                            </Button>
                            <Button
                                testID='Button-Remove-Product'
                                buttonColor={"red"}
                                onPress={() => {
                                    cart.removeFromCart(item);
                                }}>
                                X
                            </Button>
                        </Card.Actions>
                    </Card>
                )}
            />
            <Card style={{ margin: 16, marginBottom: 50 }} testID={'Card-Price'}>
                <Card.Title
                    testID={'Total-Price'}
                    title={`Total: $${Number(cart.state.totalAmount).toFixed(2)}`} />
            </Card>
        </>
    );
};

const styles = StyleSheet.create({});
