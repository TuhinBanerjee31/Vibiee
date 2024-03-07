/* eslint-disable prettier/prettier */
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {trackInprogress, resetTrack} from '../../musicPlayerServices';
const {width} = Dimensions.get('window');

const TrackCard = ({item, data}: any) => {
  async function clearSetup() {
    let flag = trackInprogress();
    if (flag) {
      await resetTrack();
    }
  }

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        clearSetup();
        navigation.navigate('PlayerLoader', {current: item, list: data});
      }}>
      <Image style={styles.imageStyles} source={{uri: item.artwork}} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.singers}>{item.artist}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TrackCard;

const styles = StyleSheet.create({
  container: {
    width: width - 20,
    height: 100,
    // backgroundColor: 'rgba(175, 167, 175, 0.1)',
    alignSelf: 'center',
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles: {
    width: 100,
    height: '95%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  info: {
    width: '70%',
    marginHorizontal: 15,
  },
  title: {
    fontSize: 20,
    color: '#FFFFFF',
    letterSpacing: 2,
  },
  singers: {
    fontSize: 13,
    color: '#878787',
  },
});
