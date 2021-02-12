import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({

    apiKey: process.env.API_KEY,
    authDomain: "AIzaSyDssCCt-IHkB08dzFigfQo9TqgLWQcpSkI",
    projectId: "anderson-app-125b9",
    storageBucket: "anderson-app-125b9.appspot.com",
    messagingSenderId: "444242471257",
    appId: "1:444242471257:web:6ae7b22cf0758ac5cac448",
});

export function getFirebase() {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}