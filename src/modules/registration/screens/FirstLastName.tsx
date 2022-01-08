import React, { FC } from 'react';
import { View } from 'react-native';
import { useFormContext, Controller } from 'react-hook-form';
import TextInput from 'materials/TextInput';
import useEditorial from 'hooks/useEditorial';
import { LETTERS } from 'constants/validation';

const rules = {
    minLength: {
        value: 2,
        message: 'Min length is 2 symbols.',
    },
    maxLength: {
        value: 50,
        message: 'Max length is 50 symbols.',
    },
    pattern: {
        value: LETTERS,
        message: 'Letters only.',
    },
};

const FirstLastName: FC = () => {
    const { control } = useFormContext();

    const {
        RegistrationEditorial: { FirstName, LastName },
    } = useEditorial();

    return (
        <View>
            <View style={{ marginBottom: 8 }}>
                <Controller
                    control={control}
                    name="firstName"
                    rules={rules}
                    render={({ field: { value, onChange }, fieldState: { error } }) => (
                        <TextInput
                            placeholder={FirstName}
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
                name="lastName"
                rules={rules}
                render={({ field: { value, onChange }, fieldState: { error } }) => (
                    <TextInput
                        placeholder={LastName}
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

export default FirstLastName;
