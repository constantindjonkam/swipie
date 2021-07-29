import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';

import appStyles from '../config/appStyles';
import colors from '../config/colors';
import googleSignIn from '../services/auth';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  return (
    <View style={styles.login}>
      <Image source={require('../assets/images/logo-200.png')} />
      <Text style={styles.text}>Proceed with your</Text>
      <Text style={styles.big}>Login</Text>
      <Button
        title="Sign In with Google"
        onPress={() =>
          googleSignIn()
            .then(() => console.log('Signed In'))
            .catch(err => console.log('Failed', err))
        }
      />
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
    marginVertical: 20,
  },
  text: {
    ...appStyles.text,
    fontSize: 28,
    marginTop: 30,
  },
});
