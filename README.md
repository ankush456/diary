MyDiary
===================

A real-world mobile app implementation.

----------


## Installation

##### Install Ionic CLI and Cordova:
```
$ npm install -g ionic cordova
```


##### Enter the MyDiary directory:
```
$ cd MyDiary
```

##### Install all dependencies and plugins:
```
$ npm install && ionic state restore
```

##### Use your own AngularFire2 settings in src/app/app.module.ts:
```
// AF2 Settings
export const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  storageBucket: "",
  messagingSenderId: ""
};
```

##### Run the app in the browser:
```
$ ionic serve
```

##### Visit the [official Ionic website][2] for details.

[1]: http://ionicframework.com/docs/v2/setup/installation/

