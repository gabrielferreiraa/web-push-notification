import firebase from 'firebase';

export const initializeFirebase = () => {
  firebase.initializeApp({
    messagingSenderId: "817714672056"
  });
}

export const askForPermissioToReceiveNotifications = async () => {
  try {

    const messaging = firebase.messaging();

    await messaging.requestPermission();
    const token = await messaging.getToken();
    document.write(token);
    console.log('user token: ', token);

    return token;
  } catch (error) {
    console.error(error);
  }
}