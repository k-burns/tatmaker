import * as fire from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

const firebase = fire.firebase

const firebaseConfig = {
  apiKey: "AIzaSyDAWnZ_AJObtYn_y5xDnY777litEMBZulI",
  authDomain: "tat-maker.firebaseapp.com",
  databaseURL: "https://tat-maker-default-rtdb.firebaseio.com",
  projectId: "tat-maker",
  storageBucket: "tat-maker.appspot.com",
  messagingSenderId: "881952290868",
  appId: "1:881952290868:web:c2dba856b3b4b0e3787261",
  measurementId: "G-8N9LHPD7FN"
};
console.log(firebase)
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
