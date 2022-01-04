import React, { FC } from 'react';
import { View } from 'react-native';
import BottomMarkPage from 'modules/common/components/BottomMarkPage';
import Title from 'materials/Title';
import { RegistrationText } from 'constants/editorial/registration';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/slices/app';

const SignIn: FC = () => {
    const lang = useSelector(selectLanguage);

    return (
        <BottomMarkPage>
            <View>
                <Title>{RegistrationText.SignIn[lang]}</Title>
            </View>
        </BottomMarkPage>
    );
};

export default SignIn;
