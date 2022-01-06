import { Languages } from 'constants/languages';
import { createEditorialGenerator } from 'modules/common/helpers/createEditorialGenerator';
import { EditorialType } from 'constants/editorial/types';

export const RegistrationText: EditorialType = {
    SignIn: {
        [Languages.UA]: 'Увійти',
        [Languages.EN]: 'Sign In',
    },
    Username: {
        [Languages.UA]: 'Логін',
        [Languages.EN]: 'Username',
    },
    Password: {
        [Languages.UA]: 'Пароль',
        [Languages.EN]: 'Password',
    },
    ForgotPassword: {
        [Languages.UA]: 'Забули пароль?',
        [Languages.EN]: 'Forgot password?',
    },
};

export const getRegistrationEditorial = createEditorialGenerator(RegistrationText);
