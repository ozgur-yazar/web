import {
	Auth,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from 'firebase/auth';
import { Firestore, doc, setDoc } from 'firebase/firestore';

import formatUser from '~/helpers/formatUser';
import { IUser, IUserRegisterForm } from '~/types';

export default function () {
	const { $auth, $firestore } = useNuxtApp() as unknown as {
		$auth: Auth;
		$firestore: Firestore;
	};
	const isLoading = useState('isLoading', () => false);
	const { userData, setUserData } = useUserData();

	const { setVisiblity, setError, setTitleAndDescription } = useAlertBox();

	const registerUser = async (
		userRegisterForm: IUserRegisterForm,
	): Promise<boolean> => {
		isLoading.value = true;
		try {
			//handle mismatch password
			if (userRegisterForm.password !== userRegisterForm.passwordConfirm) {
				setTimeout(() => {
					setError(true);
					setVisiblity(true);
					setTitleAndDescription('Opss..', 'Şifreler uyuşmuyor.');
					isLoading.value = false;
				}, 1000);
				return false;
			}
			//create firebase user
			const userCreds = await createUserWithEmailAndPassword(
				$auth,
				userRegisterForm.email,
				userRegisterForm.password,
			);

			//save user to database
			if (userCreds) {
				const formattedUser: IUser = formatUser(
					userRegisterForm,
					userCreds.user,
				);
				await setDoc(
					doc($firestore, 'users', formattedUser.uid),
					formattedUser,
				);
				setUserData(formattedUser);
				setVisiblity(true);
				setError(false);
				setTitleAndDescription('(￣▽￣)', 'Başarıyla Kayıt Oldun.');
			}

			isLoading.value = false;
			return true;
		} catch (error: unknown) {
			if (error instanceof Error) {
				setError(true);
				setVisiblity(true);
				setTitleAndDescription('Opss..', error.message);
			}
			isLoading.value = false;
		}
		isLoading.value = false;

		return false;
	};

	const initUser = async () => {
		const auth = getAuth();

		const userCookie = useCookie('userCookie');

		const router = useRouter();

		onAuthStateChanged(auth, (user) => {
			if (!user) {
				//if signed out
				router.push('/');
			}

			// @ts-ignore
			userCookie.value = userData; //ignore error because nuxt will serialize to json

			// $fetch('/api/auth', {
			// 	method: 'POST',
			// 	body: { user },
			// });
		});
	};

	//Refactor
	const signOutUser = async () => {
		const result = await $auth.signOut();
		return result;
	};

	return {
		registerUser,
		signOutUser,
		isLoading,
		initUser,
	};
}
