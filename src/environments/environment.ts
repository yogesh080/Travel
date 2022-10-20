// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'travel-ab131',
    appId: '1:533676404456:web:ddb73bcee9f2bd829c235d',
    storageBucket: 'travel-ab131.appspot.com',
    apiKey: 'AIzaSyBGSdmpu8Lit2wM6_OtCbeG86onz5mwDHQ',
    authDomain: 'travel-ab131.firebaseapp.com',
    messagingSenderId: '533676404456',
  },
  production: false,
  baseurl : "http://travelbackend1-dev.eba-u3kgtx29.us-east-1.elasticbeanstalk.com/api"
  // baseurl:"https://localhost:44314/api"

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
