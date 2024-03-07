/* eslint-disable prettier/prettier */
import {ImageBackground, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Track } from 'react-native-track-player';

const GenreCard = ({item}: any) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
     style={styles.imageWrapper}
     onPress={() => {
      navigation.navigate('ArtistTrack', { list: item.songs as Track[], img: item.imageUrl as string });
    }}
     >
      <ImageBackground style={styles.imageStyles} source={{uri: item.imageUrl}}>
        <Text style={styles.imageText}>{item.name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default GenreCard;

const styles = StyleSheet.create({
    imageWrapper: {
        width: 120,
        height: 115,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    imageStyles: {
        height: '100%',
        width: '100%',
    },
    imageText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#878787',
        width: '100%',
        opacity: 0.6,
        marginTop: '50%',
        letterSpacing: 4,
    },
});
