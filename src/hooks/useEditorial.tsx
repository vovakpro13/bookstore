import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/slices/app';
import { getSignInTextEditorial } from 'constants/editorial/auth/sign-in';
import { getCommonEditorial } from 'constants/editorial/common';
import { useMemo } from 'react';
import { getRegistrationTextEditorial } from 'constants/editorial/auth/registration';

const useEditorial = () => {
    const lang = useSelector(selectLanguage);

    const CommonEditorial = useMemo(() => getCommonEditorial(lang), [lang]);
    const SignInEditorial = useMemo(() => getSignInTextEditorial(lang), [lang]);
    const RegistrationEditorial = useMemo(() => getRegistrationTextEditorial(lang), [lang]);

    return { SignInEditorial, CommonEditorial, RegistrationEditorial };
};

export default useEditorial;
