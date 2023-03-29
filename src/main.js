import App from './App.svelte';
import { initializeApp } from "firebase/app";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword
} from "firebase/auth"
import {
	getFirestore,
	collection,
	getDocs
} from 'firebase/firestore'

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

const db = getFirestore()
const colRef = collection(db, 'cars')

getDocs(colRef) //get collection referencec
	.then((snapshot) => {
		let cars = []
		snapshot.docs.forEach((doc) => {
			cars.push({ ...doc.data(), id: doc.id })
		})
		console.log(cars)
	})
	.catch(err => {
		console.log(err.message)
	})




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


//login and logout function
const ulogout = document.querySelector('.logout')
ulogout.addEventListener('click', () => {
	signOut(auth)
		.then(() => {
			console.log("thank you for using our service today")
		})
		.catch((err) => {
			console.log(err.message)
		})
})

const ulogin = document.querySelector('.login')
ulogin.addEventListener('submit', (e) => {
	e.preventDefault()

	const umail = ulogin.email.value
	const upass = ulogin.password.value

	signInWithEmailAndPassword(auth, umail, upass)
		.then((cred) => {
			console.log("this user has been Logged in:", cred.user)
		})
		.catch((err) => {
			console.log(err.message)
		});

})