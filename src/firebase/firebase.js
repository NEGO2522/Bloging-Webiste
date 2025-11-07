// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDsiSxkPHJjRvMc3o29BMbewE95EuyekJI",
  authDomain: "blog-b6d28.firebaseapp.com",
  projectId: "blog-b6d28",
  storageBucket: "blog-b6d28.firebasestorage.app",
  messagingSenderId: "695756037554",
  appId: "1:695756037554:web:8bfa45c699b018a35918ab",
  measurementId: "G-8MGNQ42XE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const database = getDatabase(app);

// Export the Firebase services
export { app, auth, googleProvider, analytics, database };
export default app;