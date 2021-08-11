import AsyncStorage from '@react-native-async-storage/async-storage';
import CodePush from 'react-native-code-push';

export const setBeta = async () => {
  try {
    await AsyncStorage.setItem('Swipie:BETA_TESTER', 'true');
  } catch (error) {
    console.log('Could not set beta version');
  }
};

const resetBeta = async () => {
  try {
    await AsyncStorage.setItem('Swipie:BETA_TESTER', '');
  } catch (error) {
    console.log('Could not reset beta version');
  }
};

export const isBeta = async () => {
  try {
    const res = await AsyncStorage.getItem('Swipie:BETA_TESTER');
    return res === 'true';
  } catch (error) {
    console.log('Could not determine if beta tester');
    return false;
  }
};

export const toggleBeta = async () => {
  (await isBeta()) ? await resetBeta() : await setBeta();
  CodePush.restartApp();
};
