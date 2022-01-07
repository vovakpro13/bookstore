import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from 'materials/Title';
import { getRegistrationEditorial } from 'constants/editorial/registration';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/slices/app';
import TextInput from 'materials/TextInput';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'react-native-paper';
import { passwordRules, usernameRules } from 'modules/sign-in/constants/rules';
import PrimaryButton from 'materials/PrimaryButton';
import TextButton from 'materials/TextButton';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from 'navigator/appRoutes';
import AuthDrawer from 'modules/common/components/AuthDrawer';
import { AuthRoutes } from '../../navigator/authNavigator/authRoutes';

const SignIn: FC = () => {
    const theme = useTheme();
    const { title, forgotText } = makeStyles(theme);

    const lang = useSelector(selectLanguage);
    const {
        SignIn: SignInText,
        Username,
        Password,
        ForgotPassword,
        Registration,
    } = getRegistrationEditorial(lang);

    const { control } = useForm({ mode: 'onChange' });
    const { navigate } = useNavigation<any>();

    const handleForgotPassword = () => navigate({ name: AuthRoutes.ForgotPassword });
    const handleRegistration = () => navigate({ name: AuthRoutes.Registration });

    const handleSignIn = () => {};

    return (
        <>
            <Title style={title}>{SignInText}</Title>

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
                <PrimaryButton onPress={handleSignIn}>Ok</PrimaryButton>
            </View>

            <View style={{ marginTop: 8 }}>
                <TextButton onPress={handleRegistration}>{Registration}</TextButton>
            </View>
        </>
    );
};

const makeStyles = ({ colors, fonts }: ReactNativePaper.Theme) =>
    StyleSheet.create({
        title: { textAlign: 'center', marginBottom: 32 },

        forgotText: {
            textDecorationLine: 'underline',
            color: colors.secondaryText,
            fontFamily: fonts.regular.fontFamily,
            fontSize: 15,
        },
    });

export default SignIn;
