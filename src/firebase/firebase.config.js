import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "dragon-news-resource.firebaseapp.com",
  projectId: "dragon-news-resource",
  storageBucket: "dragon-news-resource.appspot.com",
  messagingSenderId: "1097802045171",
  appId: "1:1097802045171:web:397a78019f387dbde98986"
};


const app = initializeApp(firebaseConfig);
export default app;