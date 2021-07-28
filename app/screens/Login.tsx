import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import appStyles from '../config/appStyles';
import colors from '../config/colors';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <View style={styles.login}>
      <Image source={require('../assets/images/logo-200.png')} />
      <Text style={styles.text}>Proceed with your</Text>
      <Text style={styles.big}>Login</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  big: {
    ...appStyles.text,
    fontWeight: 'bold',
    fontSize: 28,
  },
  text: {
    ...appStyles.text,
    fontSize: 28,
  },
});
