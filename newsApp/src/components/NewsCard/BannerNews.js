import React from 'react';
import {ScrollView, StyleSheet, Dimensions, Image} from 'react-native';
import news_banner_data from '../../../src/news_banner_data.json';

const BannerNews = () => {
    return(
        <ScrollView horizontal 
        showsHorizontalScrollIndicator={false}>
  {news_banner_data.map(bannerNews => (
    <Image
   style={styles.banner_image} 
   source={{uri: bannerNews.imageUrl}} />
  ))}
</ScrollView>
    );
}

const styles = StyleSheet.create({
    banner_image: {
        height: Dimensions.get('window').height / 10,
        width: Dimensions.get('window').width / 3,
        marginHorizontal: 3,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: 'black'
    },

})
export default BannerNews;