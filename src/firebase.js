import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAYB-G2X_eRPX8vdq132O8Iig-NrniYCKY",
  authDomain: "dashboard-8cccc.firebaseapp.com",
  projectId: "dashboard-8cccc",
  storageBucket: "dashboard-8cccc.appspot.com",
  messagingSenderId: "660898615994",
  appId: "1:660898615994:web:735419547167ce22a22883",
  measurementId: "G-Q23NTG7V3K",
});

export const auth = app.auth();
export default app;
