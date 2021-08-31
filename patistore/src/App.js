import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import ProductsCard from './components/ProductsCard';
import SearchBar from './components/SearchBar';
import patistore_data from './patistore_data.json';

function App () {
  const renderProducts =({item}) => <ProductsCard products={item} />
  const id = (item) => item.id.toString();

  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>PATISTORE</Text>
      <SearchBar/>
      <FlatList
      numColumns={2}
      keyExtractor={id}
      data={patistore_data}
      renderItem={renderProducts}  
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20
  },
  headerText: {
    textAlign: 'center',
    color: 'purple',
    fontWeight: 'bold',
    fontSize: 29,
  }
})


export default App;