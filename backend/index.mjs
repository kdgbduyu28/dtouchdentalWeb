import express from 'express';
import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';\
// const firebaseApp = initializeApp();
// const db = getFirestore(firebaseApp);
import cors from 'cors';
import 'dotenv/config';
import { router } from './routes/userAuthRoutes.mjs';

const app = express();
const firebaseConfig = {
    apiKey: "AIzaSyA4sJ2vGXX7gYKusSMRgY7MiUPYrimF6-M",
    authDomain: "dtouchdental-65cea.firebaseapp.com",
    databaseURL: "https://dtouchdental-65cea-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "dtouchdental-65cea",
    storageBucket: "dtouchdental-65cea.appspot.com",
    messagingSenderId: "829015770870",
    appId: "1:829015770870:web:051d0ea520ffffdbfaced7",
    measurementId: "G-M40J1TXHPP"
  };
const firebaseApp = initializeApp(firebaseConfig);
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/', router);

app.listen(process.env.PORT_BACKEND, ()=>{
    console.log("Backend server now active at port 4000");
});