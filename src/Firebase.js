import firebase from "firebase/compat/app"
import  "firebase/compat/firestore"
import  "firebase/compat/auth"


const firebaseConfig = {
    apiKey: "AIzaSyDL2PMeGQO-nZ7-D4tEdi87U75HI3Kt4cs",
    authDomain: "linkedin-clonevi.firebaseapp.com",
    projectId: "linkedin-clonevi",
    storageBucket: "linkedin-clonevi.appspot.com",
    messagingSenderId: "405191801711",
    appId: "1:405191801711:web:8bd9824a5a6b761ec3069a",
    measurementId: "G-F64QTX7T28"
  };
// special code connect everything
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  // firsestore databsase
  const db =firebaseApp.firestore()
  // firebase authentication
  const auth=firebase.auth()

  export {db,auth}