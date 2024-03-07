/* eslint-disable prettier/prettier */
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {genreData} from '../data/genre/GenreConstants';
import GenreCard from '../components/GenreCard';
import {artistData} from '../data/artist/ArtistConstants';
import ArtistCard from '../components/ArtistCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" />
      <View style={styles.headerTexts}>
        <Text style={styles.username}>Hi User!</Text>
        <Text style={styles.tagline1}>Put On Your Earphones</Text>
        <Text style={styles.tagline2}>
          And Just <Text style={styles.highlight}>VIBE</Text> with{' '}
          <Text style={styles.highlight}>VIBIEE</Text>🤘
        </Text>
      </View>
      <View style={styles.genreContainer}>
        <Text style={styles.genreTitle}>Genre</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={genreData}
          keyExtractor={(item: any) => item.id}
          renderItem={({item}: any) => <GenreCard item={item} />}
        />
      </View>
      <View style={styles.artistContainer}>
        <Text style={styles.artistTitle}>Artists</Text>
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={artistData}
          // keyExtractor={(item) => item.id}
          renderItem={({item}) => <ArtistCard item={item} />}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  headerTexts: {
    paddingTop: 20,
    paddingLeft: 15,
  },
  username: {
    color: '#878787',
    fontSize: 18,
    fontWeight: '500',
  },
  tagline1: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  tagline2: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  highlight: {
    color: '#F7933D',
    fontWeight: '500',
  },
  genreContainer: {
    paddingTop: 30,
    paddingHorizontal: 12,
  },
  genreTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '500',
  },
  artistContainer: {
    marginTop: 25,
    marginBottom: 330,
    paddingHorizontal: 12,
  },
  artistTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '500',
    paddingBottom: 10,
  },
});
