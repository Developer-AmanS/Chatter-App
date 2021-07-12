import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore'


// const firebaseConfig =  {
//   apiKey: "AIzaSyBeQWguW-UYFq87h5qjyWUHaQokbDmW26A",
//   authDomain: "chatter-59914.firebaseapp.com",
//   projectId: "chatter-59914",
//   storageBucket: "chatter-59914.appspot.com",
//   messagingSenderId: "349409221319",
//   appId: "1:349409221319:web:d91cdb6c20b6e1d7427ce2",
// };

// const firebaseApp =  firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export {auth};
// export default db;


// export const signWithGoogle = () => {
//   auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider()).then((res) => {
//     console.log(res.user)
//   }).catch((e)=>{
//     console.log(e.message)
//   })
// }

export const auth = firebase.initializeApp( {
  apiKey: "AIzaSyBeQWguW-UYFq87h5qjyWUHaQokbDmW26A",
  authDomain: "chatter-59914.firebaseapp.com",
  projectId: "chatter-59914",
  storageBucket: "chatter-59914.appspot.com",
  messagingSenderId: "349409221319",
  appId: "1:349409221319:web:d91cdb6c20b6e1d7427ce2",
}).auth();

