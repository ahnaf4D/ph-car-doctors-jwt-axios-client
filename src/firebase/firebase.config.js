import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_project,
  storageBucket: import.meta.env.VITE_storageBuck,
  messagingSenderId: import.meta.env.VITE_messagingSender,
  appId: import.meta.env.VITE_app,
};

const app = initializeApp(firebaseConfig);
export default app;
