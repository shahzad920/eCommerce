import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, Card, Text} from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

type PropsType = {
  navigation:any
};

interface ProductType {
  id :number,
  name:string
  img:string
  price:number
}

export const Products = (props: PropsType) => {
  const [Products, setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    (async function () {
      const response = await fetch(
        'https://my-json-server.typicode.com/benirvingplt/products/products',
        {method: 'GET'},
      );
      const result = await response.json();
         setProducts(result);
    })();
  }, []);

  return (
    <FlatList
      numColumns={2}
      data={Products}
      renderItem={({item}) => (
        <Card
          onPress={() =>
            props.navigation.push('ProductDetail', {product: item})
          }
          style={{margin: 8, flex: 1}}>
          <Card.Cover source={{uri: item.img}} />
          <Card.Title title={item.name} subtitle={`Price: $${item.price}`} />
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({});
