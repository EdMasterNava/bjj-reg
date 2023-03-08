import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const app = initializeApp({
    apiKey: "AIzaSyAgb5xmZfyGfQ1X4FiOPjOL3dBh0WZERkg",
    authDomain: "bjj-register-dev.firebaseapp.com",
    projectId: "bjj-register-dev",
    storageBucket: "bjj-register-dev.appspot.com",
    messagingSenderId: "197026041821",
    appId: "1:197026041821:web:cf2707e70978225d2c7034"
});

export const auth = getAuth(app);
export default app;