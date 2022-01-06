import { USERNAME } from 'constants/validation';

const usernameRules = {
    minLength: {
        value: 4,
        message: 'Min length is 4 symbols',
    },
    maxLength: {
        value: 15,
        message: 'Max length is 15 symbols',
    },
    pattern: {
        value: USERNAME,
        message: 'Letters, numbers, separators only (book_sto-re.com)',
    },
};

const passwordRules = {
    minLength: {
        value: 8,
        message: 'Min length is 8 symbols',
    },

    maxLength: {
        value: 32,
        message: 'Max length is 32 symbols',
    },
};

export { usernameRules, passwordRules };
