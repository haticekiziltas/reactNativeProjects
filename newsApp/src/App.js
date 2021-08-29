import React from 'react';
import {StyleSheet, View, FlatList,Text } from 'react-native';
import NewsCard from './components/NewsCard';
import news_data from './news_data.json';
import BannerNews from './components/NewsCard/BannerNews';

 function App()  {
    const renderNews = ({item}) => <NewsCard news={item} />
    const uId = (item, index) => item.u_id.toString();

    return (
      <View style={styles.container}>
        <Text style={styles.header_text}>News</Text>
      <FlatList 
      ListHeaderComponent={() => (
        <BannerNews/>
      )}
      keyExtractor={uId}
      data={news_data}
      renderItem={renderNews}
      />
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1'
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 45,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#1E3163'
  }

})

export default App;