
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyA6071vaAiUM8RYmvSRPzBCNdgoo3OQ_nE",
    authDomain: "eat-fresh-503d8.firebaseapp.com",
    projectId: "eat-fresh-503d8",
    storageBucket: "eat-fresh-503d8.appspot.com",
    messagingSenderId: "221779871412",
    appId: "1:221779871412:web:af8f23e748a66f5f6e39e1",
    measurementId: "G-X5MLMSY1DW"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);



