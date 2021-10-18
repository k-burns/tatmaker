import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const fireBaseConfig = {
  apikey: 'AIzaSyDAWnZ_AJObtYn_y5xDnY777litEMBZulI',
  authDomain: 'tat-maker.firebaseapp.com',
  databaseURL: 'https://tat-maker-default-rtdb.firebaseio.com/',
  storageBucket: 'tat-maker.appspot.com',
  projectId: "tat-maker"
}

if(!firebase.apps.length){
  firebase.initializeApp(fireBaseConfig)
}

export { firebase }
