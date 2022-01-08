export interface RegistrationFormType {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    password2: string;
}

export const RegistrationFormDefaultValues = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    password2: '',
};
