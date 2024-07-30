// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const api_key = API_KEY
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: api_key,
  authDomain: "mern-job-portal-10ba8.firebaseapp.com",
  projectId: "mern-job-portal-10ba8",
  storageBucket: "mern-job-portal-10ba8.appspot.com",
  messagingSenderId: "309194572821",
  appId: "1:309194572821:web:47ab48b0f279783ec7ba1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
