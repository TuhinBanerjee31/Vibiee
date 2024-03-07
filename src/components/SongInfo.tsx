/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function SongInfo({title, artist}: any) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.songTitle}>{title}</Text>
        <Text style={styles.songArtist}>{artist}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'baseline',
    // justifyContent: 'center',
  },
  songTitle: {
    marginBottom: 8,
    // textAlign: 'center',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
  },
  songArtist: {
    color: '#d9d9d9',
    // textAlign: 'center',
  },
});
