import { IUser } from '~/types';

const useUserData = () => {
	const userData = useState<IUser | null>('user', () => null);

	const setUserData = (user: IUser) => {
		userData.value = user;
	};
	return {
		userData,
		setUserData,
	};
};
export default useUserData;
