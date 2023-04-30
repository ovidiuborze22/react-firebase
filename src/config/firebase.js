import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyA9trkR-lExfAVLP7KRyB-U3FbAHeoITGI",
  authDomain: "fir-course-ae796.firebaseapp.com",
  projectId: "fir-course-ae796",
  storageBucket: "fir-course-ae796.appspot.com",
  messagingSenderId: "454192999584",
  appId: "1:454192999584:web:6e319b0d9d82bf54956dc5",
  measurementId: "G-8LVQK3GVEZ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);