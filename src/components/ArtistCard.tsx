/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Track } from 'react-native-track-player';

const ArtistCard = ({ item }: { item: { name: string; imageUrl: string; songs: Track[] } }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
    style={styles.conatiner}
    onPress={() => {
      navigation.navigate('ArtistTrack', { list: item.songs as Track[], img: item.imageUrl as string });
    }}>
      <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
      <Text style={styles.artistName}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default ArtistCard;

const styles = StyleSheet.create({
    conatiner: {
        width: 180,
        height: 180,
        backgroundColor: 'rgba(175, 167, 175, 0.25)',
        marginBottom: 20,
        borderRadius: 10,
        elevation: 5,
        marginHorizontal: 10,
    },
    imageStyle: {
        width: '100%',
        height: 150,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        // borderBottomLeftRadius: 10,
    },
    artistName: {
        alignSelf: 'center',
        fontSize: 20,
        letterSpacing: 3,
        color: '#FFFFFF',
    },
});
