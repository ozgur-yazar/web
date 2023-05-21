// import {
// 	createUserWithEmailAndPassword,
// 	signInWithEmailAndPassword,
// 	onAuthStateChanged,
// 	UserCredential,
// 	getAuth,
// } from 'firebase/auth';

// //do not return credentials return bool for loading bar
// export const createUserWithEmail = async (
// 	email: string,
// 	password: string,
// ): Promise<void | UserCredential> => {
// 	const auth = getAuth();
// 	return await createUserWithEmailAndPassword(auth, email, password)
// 		.then((credentials) => credentials)
// 		.catch((error) => {
// 			const errorCode = error.code;
// 			const errorMessage = error.message;
// 		});
// };

// export const signInUserWithEmailPassword = async (
// 	email: string,
// 	password: string,
// ): Promise<void | UserCredential> => {
// 	const auth = getAuth();
// 	return await signInWithEmailAndPassword(auth, email, password)
// 		.then((credentials) => credentials)
// 		.catch((error) => {
// 			const errorCode = error.code;
// 			const errorMessage = error.message;
// 		});
// };

// export const signOutUser = async () => {
// 	const auth = getAuth();
// 	const result = await auth.signOut();
// 	return result;
// };

// export const initUser = async () => {
// 	const auth = getAuth();
// 	const userCookie = useCookie('userCookie');
// 	const router = useRouter();

// 	onAuthStateChanged(auth, (user) => {
// 		if (!user) {
// 			router.push('/');
// 		}

// 		// @ts-ignore
// 		userCookie.value = user; //ignore error because nuxt will serialize to json
// 	});
// };

import { error } from 'console';
import { Auth, createUserWithEmailAndPassword, AuthError } from 'firebase/auth';
import { Firestore, doc, setDoc } from 'firebase/firestore';
import formatUser from '~/helpers/formatUser';
import { IUser, IUserRegisterForm } from '~/types';

export default function () {
	const { $auth, $firestore } = useNuxtApp() as unknown as {
		$auth: Auth;
		$firestore: Firestore;
	};

	const registerUser = async (
		userRegisterForm: IUserRegisterForm,
	): Promise<boolean> => {
		try {
			const userCreds = await createUserWithEmailAndPassword(
				$auth,
				userRegisterForm.email,
				userRegisterForm.password,
			);
			if (userCreds) {
				const formattedUser: IUser = formatUser(
					userRegisterForm,
					userCreds.user,
				);
				await setDoc(
					doc($firestore, 'users', formattedUser.uid),
					formattedUser,
				);
				return true;
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log(error.message);
			}
			return false;
		}
		return false;
	};

	//Refactor
	const signOutUser = async () => {
		const result = await $auth.signOut();
		return result;
	};

	// const initUser = async () => {
	// 	const auth = getAuth();
	// 	const userCookie = useCookie('userCookie');
	// 	const router = useRouter();

	// 	onAuthStateChanged(auth, (firebaseUser) => {
	// 		if (!firebaseUser) {
	// 			router.push('/');
	// 		}

	// 		// @ts-ignore
	// 		userCookie.value = user; //ignore error because nuxt will serialize to json
	// 	});
	// };

	return {
		registerUser,
		signOutUser,
		// initUser,
	};
}
