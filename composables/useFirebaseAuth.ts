import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	getAuth,
	UserCredential,
} from 'firebase/auth';

export const createUserWithEmail = async (
	email: string,
	password: string,
): Promise<void | UserCredential> => {
	const auth = getAuth();
	await createUserWithEmailAndPassword(auth, email, password)
		.then((credentials) => credentials)
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
};

export const signInUserWithEmailPassword = async (
	email: string,
	password: string,
): Promise<void | UserCredential> => {
	const auth = getAuth();
	await signInWithEmailAndPassword(auth, email, password)
		.then((credentials) => credentials)
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
		});
};

export const initUser = async () => {
	const auth = getAuth();
	onAuthStateChanged(auth, (user) => {
		if (user) {
			// User is signed in, see docs for a list of available properties
			// https://firebase.google.com/docs/reference/js/firebase.User
			const uid = user.uid;
			console.log(user);
			// ...
		} else {
			// User is signed out
			// ...
		}
	});
};
