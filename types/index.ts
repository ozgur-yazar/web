export interface IUserRegisterForm {
	name: string;
	username: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export interface IUserLoginForm {
	email: string;
	password: string;
}

export interface IUser {
	uid: string;
	name: string;
	username: string;
	email: string | null;
}
