/* eslint-disable prettier/prettier */
import {FlatList, ImageBackground, StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import TrackCard from '../components/TrackCard';

const ArtistTrack = ({route}: any) => {

  const {list, img} = route.params;
  return (
    <View style={styles.container}>

      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground style={styles.headerImage} source={{uri: img}} />
      <FlatList
      data={list}
      showsVerticalScrollIndicator={false}
      keyExtractor={index => index.id.toString()}
      renderItem={({item}: any) => (
        <TrackCard item={item} data={list} />
      )}
      />

    </View>
  );
};

export default ArtistTrack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  headerImage:{
    width: '100%',
    height: 400,
    opacity:0.5,
  },
});
