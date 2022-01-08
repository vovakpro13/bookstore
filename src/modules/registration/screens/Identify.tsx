import React, { FC } from 'react';
import { View } from 'react-native';
import { useFormContext, Controller } from 'react-hook-form';
import TextInput from 'materials/TextInput';
import useEditorial from 'hooks/useEditorial';
import { EMAIL, USERNAME } from 'constants/validation';
import { usernameRules } from '../../sign-in/constants/rules';

const emailRules = {
    pattern: {
        value: EMAIL,
        message: 'Email is not valid.',

        maxLength: {
            value: 320,
            message: 'Max length is 320 symbols',
        },
    },
};

const Identify: FC = () => {
    const { control } = useFormContext();

    const {
        CommonEditorial: { Username, Email },
    } = useEditorial();

    return (
        <View>
            <View style={{ marginBottom: 8 }}>
                <Controller
                    control={control}
                    name="username"
                    rules={usernameRules}
                    render={({ field: { value, onChange }, fieldState: { error } }) => (
                        <TextInput
                            placeholder={Username}
                            icon={require('assets/png/user.png')}
                            value={value}
                            onChangeText={onChange}
                            isError={!!error}
                            helperText={error?.message}
                        />
                    )}
                />
            </View>

            <Controller
                control={control}
                name="email"
                rules={emailRules}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <TextInput
                        placeholder={Email}
                        icon={require('assets/png/email.png')}
                        value={value}
                        onChangeText={onChange}
                        isError={!!error}
                        helperText={error?.message}
                    />
                )}
            />
        </View>
    );
};

export default Identify;
