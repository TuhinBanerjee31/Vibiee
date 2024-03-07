/* eslint-disable prettier/prettier */
import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './screens/Home';
import ArtistTrack from './screens/ArtistTrack';
import PlayerLoader from './screens/PlayerLoader';

const Stack = createStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="ArtistTrack" component={ArtistTrack} options={{title: '', headerTransparent: true, headerTintColor: '#FFFFFF'}} />
      <Stack.Screen name="PlayerLoader" component={PlayerLoader} options={{title: '', headerTransparent: true, headerTintColor: '#FFFFFF'}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
