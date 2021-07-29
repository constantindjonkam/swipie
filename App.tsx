import React, {useEffect} from 'react';
import {View, StatusBar, StyleSheet, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import colors from './app/config/colors';
import AppNavigator from './app/navigation/AppNavigator';
import isUser from './app/services/user';
import AuthNavigator from './app/navigation/AuthNavigator';

const App = () => {
  useEffect(() => SplashScreen.hide(), []);
  const isDarkMode = useColorScheme() === 'dark';
  const user = isUser();

  // console.log(user === null ? 'Loading' : user.displayName);
  const navigationRef = React.createRef();
  // @ts-ignore
  const {navigate} = (name, params) =>
    // @ts-ignore
    navigationRef.current?.navigate(name, params);

  return (
    <View style={styles.app}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer ref={navigate}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
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
