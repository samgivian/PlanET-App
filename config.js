import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA3cGd6oZCR-RhOvIVZGGUJLDGchTIYJjI",
    authDomain: "diamondchallange-db58f.firebaseapp.com",
    databaseURL: "https://diamondchallange-db58f.firebaseio.com",
    projectId: "diamondchallange-db58f",
    storageBucket: "diamondchallange-db58f.appspot.com",
    messagingSenderId: "500461681240",
    appId: "1:500461681240:web:daf70631dfec2ce885e82d",
    measurementId: "G-0DRRJET4CV"
  };
 let app= firebase.initializeApp(firebaseConfig);
  
export const fire = app;
