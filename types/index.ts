export interface UserRegisterForm {
	name: string;
	username: string;
	email: string;
	password: string;
	passwordConfirm: string;
}

export interface UserLoginForm {
	email: string;
	password: string;
}
