/* eslint-disable prettier/prettier */
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {setupPlayer, addTrack} from '../../musicPlayerServices';
import MusicPlayer from '../components/MusicPlayer';

const PlayerLoader = ({route}: any) => {
  const {current, list} = route.params;

  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();

    if (isSetup) {
      await addTrack(list);
    }

    setIsPlayerReady(isSetup);
  }

  useEffect(() => {
    setup();
    console.log(current);
  });

  if (!isPlayerReady) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MusicPlayer data={list} current={current} />
    </View>
  );
};

export default PlayerLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
