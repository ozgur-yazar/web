import { User } from 'firebase/auth';
import { IUser, IUserRegisterForm } from '~/types';

export default function formatUser(
	userRegisterForm: IUserRegisterForm,
	firebaseUserResponse: User,
): IUser {
	return {
		name: userRegisterForm.name,
		username: userRegisterForm.username,
		uid: firebaseUserResponse.uid,
		email: firebaseUserResponse.email,
	};
}
