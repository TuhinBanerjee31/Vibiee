/* eslint-disable prettier/prettier */
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import SongInfo from './SongInfo';
import SongSlider from './SongSlider';
import ControlCenter from './ControlCenter';

const {width} = Dimensions.get('window');

export default function MusicPlayer({data, current}: any) {
  const [trackArtwork, setTrackArtwork] = useState(current.artwork);
  const [trackTitle, setTrackTitle] = useState(current.title);
  const [trackArtist, setTrackArtist] = useState(current.artist);
  const [songIndex, setSongIndex] = useState(current.id - 1);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
      if (playingTrack != null) {
        const {id, title, artwork, artist} = playingTrack;
        setTrackArtwork(artwork);
        setTrackTitle(title);
        setTrackArtist(artist);
        setSongIndex(id);
      }
    }
  });

  const skipTo = async (id: number) => {
    await TrackPlayer.skip(id);
  };

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (flag) {
      skipTo(songIndex);
      setFlag(false);
    }
  }, [flag, songIndex]);

  const renderArtWork = ({}) => {
    return (
      <View style={styles.artworkWapper}>
        <View style={styles.artwork}>
          <Image
            style={styles.artworkImg}
            source={{
              uri: trackArtwork,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        scrollEnabled={false}
        pagingEnabled
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderArtWork}
        keyExtractor={index => index.id}
      />

      <SongInfo title={trackTitle} artist={trackArtist} />
      <SongSlider />
      <ControlCenter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  artworkWapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  artwork: {
    width: width - 40,
    height: '60%',
  },
  artworkImg: {
    height: '100%',
    width: '100%',
    borderRadius: 4,
    // borderBottomLeftRadius: 90,
    // borderTopRightRadius: 90,
  },
});
