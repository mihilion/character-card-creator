import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT-wNSHGw5QB3Rezd0JJEA6tZnT1iXNaA",
  authDomain: "character-card-creator.firebaseapp.com",
  projectId: "character-card-creator",
  storageBucket: "character-card-creator.appspot.com",
  messagingSenderId: "752412429327",
  appId: "1:752412429327:web:df392de6861cc9edd5e77a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
