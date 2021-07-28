import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import colors from './app/config/colors';
import ProfileSwiper from './app/components/Swiper';
import Login from './app/screens/Login';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.app}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <ProfileSwiper /> */}
      {/* <Login /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default App;
