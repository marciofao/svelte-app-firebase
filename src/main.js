import App from './App.svelte';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword
} from "firebase/auth"

let signUpMessage = '';
let loginMessage = '';
const app = new App({
	target: document.body,
	props: {
		name: 'this',
		signUpMessage: signUpMessage,
		loginMessage: loginMessage
	}
});

export default app;


const firebaseConfig = {
	apiKey: "AIzaSyBTjVKUeUdZr1pinJDqWYNLrvUeg6UZKkQ",
	authDomain: "hello-svelte-17cb8.firebaseapp.com",
	projectId: "hello-svelte-17cb8",
	storageBucket: "hello-svelte-17cb8.appspot.com",
	messagingSenderId: "698132030585",
	appId: "1:698132030585:web:eafa0cc18f0abc9cc7e0a8",
	measurementId: "G-C3Y7176TSB"
};

// Initialize Firebase
initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth();

//signup form

const usignUp = document.querySelector('.signup')
usignUp.addEventListener('submit', (e) => {

	e.preventDefault()

	const email = usignUp.email.value
	const pass = usignUp.password.value

	createUserWithEmailAndPassword(auth, email, pass)
		.then((cred) => {
			console.log("this user has been created:", cred.user)
			usignUp.reset()
		})
		.catch((err) => {
			signUpMessage = err.message
			console.log(signUpMessage)
		})
})
