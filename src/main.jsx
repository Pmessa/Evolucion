import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCxuxDVTIgIdUh-NwERe6W4wKXQ9WGF-Ro",
  authDomain: "mis-nutrientes-vegan-eaf0d.firebaseapp.com",
  projectId: "mis-nutrientes-vegan-eaf0d",
  storageBucket: "mis-nutrientes-vegan-eaf0d.appspot.com",
  messagingSenderId: "571435294543",
  appId: "1:571435294543:web:8f955e5baf98b7574aaf3a"
};
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
