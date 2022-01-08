import { Languages } from 'constants/languages';
import { createEditorialGenerator } from 'modules/common/helpers/createEditorialGenerator';
import { EditorialType } from 'constants/editorial/types';

export const CommonText: EditorialType = {
    Back: {
        [Languages.UA]: 'Назад',
        [Languages.EN]: 'Back',
    },
    Ok: {
        [Languages.UA]: 'Ок',
        [Languages.EN]: 'Ok',
    },
    Create: {
        [Languages.UA]: 'Створити',
        [Languages.EN]: 'Create',
    },
    Next: {
        [Languages.UA]: 'Далі',
        [Languages.EN]: 'Next',
    },
    Username: {
        [Languages.UA]: 'Логін',
        [Languages.EN]: 'Username',
    },
    Password: {
        [Languages.UA]: 'Пароль',
        [Languages.EN]: 'Password',
    },
    Email: {
        [Languages.UA]: 'Електронна адреса',
        [Languages.EN]: 'E-mail',
    },
};

export const getCommonEditorial = createEditorialGenerator(CommonText);
