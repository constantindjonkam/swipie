import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';

import appStyles from '../config/appStyles';
import colors from '../config/colors';
import {googleSignOut} from '../services/auth';
import getUser from '../services/user';

export interface AccountInfoProps {}

const AccountInfo: React.FC<AccountInfoProps> = () => {
  const user = getUser();

  return (
    <View style={styles.account}>
      <Text style={styles.big}>Account</Text>
      <Text style={styles.big}>{user?.displayName}</Text>

      <Button
        title="Sign Out"
        onPress={() =>
          googleSignOut()
            .then(() => console.log('Signed Out'))
            .catch(err => console.log('Failed', err))
        }
      />
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
