import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQrVrvqFXcyRP1d_GBwO_jdPQHGJ5WtD4",
  authDomain: "bhaibhaistore-2968b.firebaseapp.com",
  projectId: "bhaibhaistore-2968b",
  storageBucket: "bhaibhaistore-2968b.appspot.com",
  messagingSenderId: "88477748458",
  appId: "1:88477748458:web:506f2be39d589a32e51b93",
  measurementId: "G-KY2R1LB7WM"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
