import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtmj8CeZiTgqwofnJUDfp07AYnnfgquxA",
  authDomain: "simple-trading-app.firebaseapp.com",
  projectId: "simple-trading-app",
  storageBucket: "simple-trading-app.firebasestorage.app",
  messagingSenderId: "958123858037",
  appId: "1:958123858037:web:6ddcaccebb1873d475803c",
  measurementId: "G-RKQDMF7BVM"
};

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} 

const auth = getAuth(app);

export { auth };
