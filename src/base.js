import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyA3tczfT-BN6nOAKFN0a5d_hX9R4DxSNHM",
	authDomain: "catch-of-the-day-john-e.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-john-e.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;
