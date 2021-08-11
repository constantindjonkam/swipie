import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import colors from './app/config/colors';
import withCodePush from './withCodePush';
import RootNavigator from './app/navigation/RootNavigator';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.app}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.black,
  },
});

export default withCodePush(App);
