import { Languages } from 'constants/languages';
import { createEditorialGenerator } from 'modules/common/helpers/createEditorialGenerator';
import { EditorialType } from 'constants/editorial/types';

export const SignInText: EditorialType = {
    SignIn: {
        [Languages.UA]: 'Увійти',
        [Languages.EN]: 'Sign In',
    },
    ForgotPassword: {
        [Languages.UA]: 'Забули пароль?',
        [Languages.EN]: 'Forgot password?',
    },
    Registration: {
        [Languages.UA]: 'Зареєструватись',
        [Languages.EN]: 'Registration',
    },
};

export const getSignInTextEditorial = createEditorialGenerator(SignInText);
