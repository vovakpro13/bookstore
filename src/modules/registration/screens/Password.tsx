import React, { FC } from 'react';
import { View } from 'react-native';
import { useFormContext, Controller } from 'react-hook-form';
import TextInput from 'materials/TextInput';
import useEditorial from 'hooks/useEditorial';
import { PASSWORD } from 'constants/validation';

const passwordRules = {
    minLength: {
        value: 8,
        message: 'Min length is 8 symbols',
    },
    maxLength: {
        value: 32,
        message: 'Max length is 32 symbols',
    },
    pattern: {
        value: PASSWORD,
        message: 'Password should contain at least one digit, one lower case, one upper case',
    },
};

const Password: FC = () => {
    const { control, watch } = useFormContext();

    const {
        RegistrationEditorial: { RepeatPassword },
        CommonEditorial: { Password },
    } = useEditorial();

    return (
        <View>
            <View style={{ marginBottom: 8 }}>
                <Controller
                    control={control}
                    name="password"
                    rules={passwordRules}
                    render={({ field: { value, onChange }, fieldState: { error } }) => (
                        <TextInput
                            placeholder={Password}
                            icon={require('assets/png/key.png')}
                            value={value}
                            onChangeText={onChange}
                            isError={!!error && error?.type !== 'pattern'}
                            helperText={error?.message}
                        />
                    )}
                />
            </View>

            <Controller
                control={control}
                name="password2"
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <TextInput
                        placeholder={RepeatPassword}
                        icon={require('assets/png/key.png')}
                        value={value}
                        onChangeText={onChange}
                        helperText={
                            !!value && watch('password') !== value ? 'Passwords don`t match' : ''
                        }
                    />
                )}
            />
        </View>
    );
};

export default Password;
