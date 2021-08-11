import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '676637413467-n4mkd7g3b1nqruk3ed3lk1rjmh1uhg23.apps.googleusercontent.com',
});

export const googleSignIn = async () => {
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
};

export const googleSignOut = async () => {
  await auth().signOut();
};
