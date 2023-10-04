import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-paper';
import axios from 'axios';

type PropsType = {
  navigation?: any;
  test?: any;
};

interface ProductType {
  id: number;
  name: string;
  img: string;
  price: number;
}

export const Products = ({navigation,test=false}: PropsType) => {
  const [Products, setProducts] = useState<ProductType[]>([]);

  /**
   * Api for Product list
   * */
  const getUserData = async () => {
    const data = await fetch(
      'https://my-json-server.typicode.com/benirvingplt/products/products',
    );
    const response = await data.json();
    setProducts(response);
  };
  useEffect(() => {
    if(!test){
    getUserData();}
  }, []);
  return (
    <FlatList
      numColumns={2}
      testID="Product-List"
      data={Products}
      renderItem={({item, index}) => (
        <Card
          testID={`Product-Card`}
          onPress={() => navigation.push('ProductDetail', {product: item})}
          style={{margin: 8, flex: 1}}>
          <Card.Cover testID="Product-Image" source={{uri: item.img}} />
          <Card.Title
            testID="Product-Title"
            title={item.name}
            subtitle={`Price: $${item.price}`}
          />
        </Card>
      )}
    />
  );
};

const styles = StyleSheet.create({});
