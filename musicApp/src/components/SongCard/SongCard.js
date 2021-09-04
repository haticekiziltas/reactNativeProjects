import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './SongCard.styles';

const SongCard = (props) => {
    return(
        <View style={styles.container}>
            <Image
            style={styles.image}
            source={{uri: props.song.imageUrl}}
            />
            <View style={styles.innerContainer}>
                <Text style={styles.title}>{props.song.title}</Text>
      
            <View style={styles.contentContainer}>
            <View style={styles.infoContainer}>
            <Text>{props.song.artist}</Text>
             <Text style={styles.year}>{props.song.year}</Text>            
            </View>
                        
          {props.song.isSoldOut && (
                    <View style={styles.soldOutContainer}>
                    <Text style={styles.soldOutTitle}>TÜKENDİ</Text>
                  </View>
          )}
          </View>
          <View style={styles.albumInfo}>
            <Text style={styles.album}>{props.song.album}</Text>
          </View>
        </View>
        </View>
    );
};

export default SongCard;