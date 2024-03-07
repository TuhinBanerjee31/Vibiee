/* eslint-disable prettier/prettier */
import TrackPlayer, {Event, RepeatMode, AppKilledPlaybackBehavior} from 'react-native-track-player';

let flag = false;
export function trackInprogress(){
  return flag;
}


export async function setupPlayer(){
    let isSetupReady = false;
    try {
       await TrackPlayer.getActiveTrackIndex();
       isSetupReady = true;
       TrackPlayer.updateOptions({
        android: {
            // This is the default behavior
            appKilledPlaybackBehavior: AppKilledPlaybackBehavior.PausePlayback,
        },
    });
    } catch (error) {
        await TrackPlayer.setupPlayer();
        isSetupReady = true;
    } finally {
        return isSetupReady;
    }
}

export async function resetTrack(){
  await TrackPlayer.reset();
}

export async function addTrack(Songs){
    await TrackPlayer.add(Songs);
    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
    flag = true;
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });

  TrackPlayer.addEventListener(Event.RemoteSkip, (index) => {
    TrackPlayer.skip(index);
  });
}
