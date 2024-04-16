import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Взломать пентагон', index: 1},
    {text: 'Настроить вайфай', index: 2},
    {text: 'Захватить Польшу', index: 3},
    {text: 'Да', index: 4},
  ])

  return (
    <View>
      <Header />
      <View>
        <FlatList data={listOfItems} renderItem={({ item }) => (
          <ListItem el={item} />
        )} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});
