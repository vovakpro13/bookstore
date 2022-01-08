import { Languages } from 'constants/languages';
import { createEditorialGenerator } from 'modules/common/helpers/createEditorialGenerator';
import { EditorialType } from 'constants/editorial/types';

export const RegistrationText: EditorialType = {
    RepeatPassword: {
        [Languages.UA]: 'Повторіть пароль',
        [Languages.EN]: 'Repeat password',
    },
    FirstName: {
        [Languages.UA]: "Ім'я",
        [Languages.EN]: 'First name',
    },
    LastName: {
        [Languages.UA]: 'Прізвище',
        [Languages.EN]: 'Last name',
    },
    RegistrationTitle: {
        [Languages.UA]: 'Реєстрація',
        [Languages.EN]: 'Registration',
    },
    Step1: {
        [Languages.UA]: 'Давайте знайомитись.',
        [Languages.EN]: "Let's get acquainted.",
    },
    Step2: {
        [Languages.UA]:
            "Логін - це ваше унікальне ім'я. Електронна адреса потрібна для підтвердження вашої особи.",
        [Languages.EN]:
            'Login is your unique name. An email address is required to verify your identity.',
    },
    Step3: {
        [Languages.UA]: 'Пароль необхідний для входу у ваш аккаунт.',
        [Languages.EN]: 'A password is required to log in to your account',
    },
    WeSendYouEmail: {
        [Languages.UA]: 'Ми надіслали Вам лист',
        [Languages.EN]: 'We have sent you a letter',
    },
    CheckYourEmail: {
        [Languages.UA]: 'Для входу перевірте ваш email',
        [Languages.EN]: 'Check your E-mail',
    },
};

export const getRegistrationTextEditorial = createEditorialGenerator(RegistrationText);
