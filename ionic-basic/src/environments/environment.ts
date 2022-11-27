// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const environment = {
  production: false, 
  firebaseConfig : {
      apiKey: "AIzaSyA3aHDFu7axO8IbGFRV8khfbIIG_R3Tis8",
      authDomain: "gamenews-27f75.firebaseapp.com",
      databaseURL: "https://gamenews-27f75-default-rtdb.firebaseio.com",
      projectId: "gamenews-27f75",
      storageBucket: "gamenews-27f75.appspot.com",
      messagingSenderId: "563323959827",
      appId: "1:563323959827:web:fcaa93c7ade506a5299de6",
      measurementId: "G-LQTS5N2R3J"
    }
  };

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
