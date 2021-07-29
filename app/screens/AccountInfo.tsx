import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import appStyles from '../config/appStyles';
import colors from '../config/colors';

export interface AccountInfoProps {}

const AccountInfo: React.FC<AccountInfoProps> = () => {
  return (
    <View style={styles.account}>
      <Text style={styles.big}>Account</Text>
    </View>
  );
};

export default AccountInfo;

const styles = StyleSheet.create({
  account: {
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
});
