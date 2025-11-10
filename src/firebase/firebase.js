// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsiSxkPHJjRvMc3o29BMbewE95EuyekJI",
  authDomain: "blog-b6d28.firebaseapp.com",
  databaseURL: "https://blog-b6d28-default-rtdb.firebaseio.com/",
  projectId: "blog-b6d28",
  storageBucket: "blog-b6d28.firebasestorage.app",
  messagingSenderId: "695756037554",
  appId: "1:695756037554:web:8bfa45c699b018a35918ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Export the database
export { database };
export default app;