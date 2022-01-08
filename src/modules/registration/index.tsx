import React, { ReactNode } from 'react';
import { View } from 'react-native';
import Title from 'materials/Title';
import useEditorial from 'hooks/useEditorial';
import { FormProvider, useForm } from 'react-hook-form';
import {
    RegistrationFormDefaultValues,
    RegistrationFormType,
} from 'modules/registration/constants/form';
import { useStateAlteration } from 'hooks/useStateAlteration';
import Description from 'materials/Description';
import PrimaryButton from 'materials/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { ProgressBar, useTheme } from 'react-native-paper';
import { Screens } from './constants/screens';
import FirstLastName from './screens/FirstLastName';
import Identify from './screens/Identify';
import Password from './screens/Password';

const Registration = () => {
    const theme = useTheme();

    const {
        RegistrationEditorial: { RegistrationTitle, Step1, Step2, Step3 },
        CommonEditorial: { Back, Next },
    } = useEditorial();

    const navigator = useNavigation<any>();
    const [currentScreen, , setNext, setPrevious] = useStateAlteration(Screens.FirstLastName);

    const formMethods = useForm<RegistrationFormType>({
        mode: 'onChange',
        defaultValues: RegistrationFormDefaultValues,
    });

    const {
        getValues,
        formState: { errors },
    } = formMethods;

    const getScreen = (): Record<number, ReactNode> => ({
        [Screens.FirstLastName]: <FirstLastName />,
        [Screens.Identify]: <Identify />,
        [Screens.Password]: <Password />,
    });

    const getNextPressCallback = () => {
        if (currentScreen == Screens.Password) return () => {};
        return setNext;
    };

    const getDisabled = () => {
        switch (currentScreen) {
            case Screens.FirstLastName:
                return (
                    !!errors.firstName ||
                    !!errors.lastName ||
                    !getValues('firstName').length ||
                    !getValues('lastName').length
                );

            case Screens.Identify:
                return (
                    !!errors.email ||
                    !!errors.username ||
                    !getValues('email').length ||
                    !getValues('username').length
                );

            case Screens.Password:
                return (
                    !!errors.password ||
                    !!errors.password2 ||
                    !getValues('password').length ||
                    !getValues('password2').length
                );

            default:
                return true;
        }
    };

    const getBackPressCallback = (step: Screens) => {
        if (!!step) return setPrevious;
        return navigator.goBack;
    };

    return (
        <View>
            <Title textAlign="center" marginBottom={8}>
                {RegistrationTitle}
            </Title>

            <View style={{ width: 150, marginBottom: 16, alignSelf: 'center' }}>
                <ProgressBar progress={currentScreen / 2} color={theme.colors.primary} />
            </View>

            <Description textAlign="left" paddingBottom={8} paddingLeft={12}>
                {[Step1, Step2, Step3][currentScreen]}
            </Description>

            <FormProvider {...formMethods}>
                {getScreen()[currentScreen]}

                <View style={{ marginTop: 32, marginBottom: 8 }}>
                    <PrimaryButton disabled={getDisabled()} onPress={getNextPressCallback()}>
                        {Next}
                    </PrimaryButton>
                </View>

                <PrimaryButton secondary onPress={getBackPressCallback(currentScreen)}>
                    {Back}
                </PrimaryButton>
            </FormProvider>
        </View>
    );
};

export default Registration;
