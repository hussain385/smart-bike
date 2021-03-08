import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDHEcVIhd6M5pMLftk1Ac45x03Vcx_7N64",
    authDomain: "covid-19-tracker-ceba5.firebaseapp.com",
    databaseURL: "https://covid-19-tracker-ceba5-default-rtdb.firebaseio.com",
    projectId: "covid-19-tracker-ceba5",
    storageBucket: "covid-19-tracker-ceba5.appspot.com",
    messagingSenderId: "993835740149",
    appId: "1:993835740149:web:20aa25e5347ea98eb80ebc",
    measurementId: "G-DZZND0NWMB"
  };

  firebase.initializeApp(config);
  export default firebase