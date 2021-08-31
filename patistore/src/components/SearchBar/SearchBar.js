import React, { Component } from 'react'
import {StyleSheet, View, TextInput } from 'react-native'

export default class SearchBar extends Component {
    
  
    render() {
        return (
            <View style={styles.searchBar}>
              <View style={styles.searchBarContainer}>
              <TextInput
                placeholder="Ara"
                placeholderTextColor={"#BBBBBB"}

                />
              </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        margin: 10
    },
    searchBarContainer:{
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#eceff1',
    },
    searchInput: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#f1f2f3',
        borderRadius: 20,
    }
})
