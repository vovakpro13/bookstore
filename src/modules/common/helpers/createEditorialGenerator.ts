import { Languages } from 'constants/languages';
import { EditorialType } from 'constants/editorial/types';

const createEditorialGenerator =
    (editorial: EditorialType) =>
    (lang: Languages): Record<string, string> => {
        return Object.keys(editorial).reduce((acc, key) => {
            acc[key] = editorial[key][lang];

            return acc;
        }, {} as Record<string, string>);
    };

export { createEditorialGenerator };
