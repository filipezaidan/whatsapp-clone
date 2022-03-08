import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBltiNN3QTHCTI6b-KBILfl9VMM-rsgquc",
    authDomain: "whatsapp-clone-47802.firebaseapp.com",
    projectId: "whatsapp-clone-47802",
    storageBucket: "whatsapp-clone-47802.appspot.com",
    messagingSenderId: "725294728018",
    appId: "1:725294728018:web:f0abac91e6020f81c1f08b"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
