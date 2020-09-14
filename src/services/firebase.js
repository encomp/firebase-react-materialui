import firebase from "firebase/app";
import "firebase/auth";
// import "firebase/database";

fetch('/__/firebase/init.json').then(async response => {
    firebase.initializeApp(await response.json());
});

export const auth = firebase.auth;
// export const db = firebase.database();