import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from 'materials/Title';
import TextInput from 'materials/TextInput';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'react-native-paper';
import { passwordRules, usernameRules } from 'modules/sign-in/constants/rules';
import PrimaryButton from 'materials/PrimaryButton';
import TextButton from 'materials/TextButton';
import { useNavigation } from '@react-navigation/native';
import { AuthRoutes } from 'navigator/authNavigator/authRoutes';
import useEditorial from 'hooks/useEditorial';
import { SignInFormType, SignInFormDefaultValues } from 'modules/sign-in/constants/form';

const SignIn: FC = () => {
    const theme = useTheme();
    const { forgotText } = makeStyles(theme);

    const navigation = useNavigation<any>();

    const {
        SignInEditorial: { SignIn: SignInText, ForgotPassword, Registration },
        CommonEditorial: { Username, Password, Ok },
    } = useEditorial();

    const { control } = useForm<SignInFormType>({
        mode: 'onChange',
        defaultValues: SignInFormDefaultValues,
    });

    const handleForgotPassword = () => navigation.push(AuthRoutes.ForgotPassword);
    const handleRegistration = () => navigation.push(AuthRoutes.Registration);

    const handleSignIn = () => {};

    return (
        <View style={{ marginTop: 10 }}>
            <Title textAlign="center" marginBottom={32}>
                {SignInText}
            </Title>

            <Controller
                control={control}
                name="username"
                rules={usernameRules}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <TextInput
                        placeholder={Username}
                        value={value}
                        onChangeText={onChange}
                        icon={require('assets/png/user.png')}
                        isError={!!error}
                        helperText={error?.message}
                    />
                )}
            />

            <View style={{ marginTop: 8 }}>
                <Controller
                    control={control}
                    name="password"
                    rules={passwordRules}
                    render={({ field: { value, onChange }, fieldState: { error } }) => (
                        <TextInput
                            secureTextEntry={true}
                            placeholder={Password}
                            value={value}
                            onChangeText={onChange}
                            icon={require('assets/png/key.png')}
                            isError={!!error}
                            helperText={error?.message}
                        />
                    )}
                />
            </View>

            <View style={{ marginTop: 8, alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={handleForgotPassword}>
                    <Text style={forgotText}>{ForgotPassword}</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 24 }}>
                <PrimaryButton onPress={handleSignIn}>{Ok}</PrimaryButton>
            </View>

            <View style={{ marginTop: 8 }}>
                <TextButton onPress={handleRegistration}>{Registration}</TextButton>
            </View>
        </View>
    );
};

const makeStyles = ({ colors, fonts }: ReactNativePaper.Theme) =>
    StyleSheet.create({
        forgotText: {
            textDecorationLine: 'underline',
            color: colors.secondaryText,
            fontFamily: fonts.regular.fontFamily,
            fontSize: 15,
        },
    });

export default SignIn;
