export interface IRegistrationForm {
	username: string,
	email: string,
	password: string,
	confirmPassword: string,
	birthDate: Date | undefined,
	gender: string,
	phone: string,
}