import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BottomMarkPage from 'modules/common/components/BottomMarkPage';
import Title from 'materials/Title';
import { getRegistrationEditorial } from 'constants/editorial/registration';
import { useSelector } from 'react-redux';
import { selectLanguage } from 'redux/slices/app';
import TextInput from 'materials/TextInput';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from 'react-native-paper';
import { passwordRules, usernameRules } from 'modules/sign-in/constants/rules';
import PrimaryButton from 'materials/PrimaryButton';

const SignIn: FC = () => {
    const { colors } = useTheme();
    const { container, title, forgotText } = makeStyles(colors);

    const lang = useSelector(selectLanguage);
    const {
        SignIn: SignInText,
        Username,
        Password,
        ForgotPassword,
    } = getRegistrationEditorial(lang);

    const { control } = useForm({ mode: 'onChange' });

    const handleForgotPassword = () => {};
    const handleSignIn = () => {};

    return (
        <BottomMarkPage>
            <View style={container}>
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
            </View>
        </BottomMarkPage>
    );
};

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
    StyleSheet.create({
        container: {
            padding: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flex: 1,
        },

        title: { textAlign: 'center', marginBottom: 32 },

        forgotText: {
            textDecorationLine: 'underline',
            color: colors.secondaryText,
            fontWeight: '400',
            fontSize: 17,
        },
    });

export default SignIn;
