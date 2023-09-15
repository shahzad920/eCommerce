import { FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-native-paper';
import axios from 'axios';

type PropsType = {
    navigation?: any
    test?: any
};

interface ProductType {
    id: number,
    name: string
    img: string
    price: number,
}

export const Products = ({ navigation, test }: PropsType) => {
    const [Products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        if (!test) getUserData();
    }, []);

    /**
 * Api for Product list
 * */
    const getUserData = () => {
        axios({
            method: 'GET',
            url: 'https://my-json-server.typicode.com/benirvingplt/products/products',
        })
            .then((data) => {
                setProducts(data.data);
            })
            .catch(e => console.warn(e));
    };

    return (
        <FlatList
            numColumns={2}
            testID='Product-List'
            data={Products}
            renderItem={({ item, index }) => (
                <Card
                    testID={`Product-Card`}
                    onPress={() =>
                        navigation.push('ProductDetail', { product: item })
                    }
                    style={{ margin: 8, flex: 1 }}>
                    <Card.Cover
                        testID='Product-Image'
                        source={{ uri: item.img }} />
                    <Card.Title
                        testID='Product-Title'
                        title={item.name} subtitle={`Price: $${item.price}`} />
                </Card>
            )}
        />
    );
};

const styles = StyleSheet.create({});
