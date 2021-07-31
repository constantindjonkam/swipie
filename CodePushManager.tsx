import React from 'react';
import {useEffect} from 'react';
import {Platform} from 'react-native';
import codePush from 'react-native-code-push';
import {isBeta} from './app/services/betaTester';

const codePushKeys = {
  staging: Platform.select({
    ios: 'HzlCL4O7akDQT5po4TRZRjUQmYsQqjgL7d0J8',
    android: 'zXM-wG23xOTgnCC_llYKlJGH02imbrIx0F7UE',
  }),
  production: Platform.select({
    ios: 'PPnMcglLJbn4mOV_flCORwsPnFxLRWueDT1RT',
    android: 'vjbcAj6x5S6PPU4sl18_P6Hq2E5WLMICVIHvQ',
  }),
};

const CodePushManager: React.FC = () => {
  useEffect(() => {
    codePush
      .notifyAppReady()
      .then(async () => {
        (await isBeta())
          ? codePush.sync({
              deploymentKey: codePushKeys.staging,
              updateDialog: codePush.DEFAULT_UPDATE_DIALOG,
              installMode: codePush.InstallMode.IMMEDIATE,
            })
          : codePush.sync({deploymentKey: codePushKeys.production});
      })
      .catch(() => console.log('Code push failed'));
  }, []);

  return null;
};

export default codePush({checkFrequency: codePush.CheckFrequency.MANUAL})(
  CodePushManager,
);
