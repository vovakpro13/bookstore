import React, { FC } from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    Text,
    TextInput as TextInputNative,
    TextInputProps,
    View,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { shadows } from '../constants/styles/shadows';

type IProps = TextInputProps & {
    icon?: ImageSourcePropType;
    helperText?: string;
    isError?: boolean;
};

const TextInput: FC<IProps> = ({ icon, helperText, isError, ...textInputProps }) => {
    const { colors } = useTheme();
    const {
        wrapper,
        container,
        errorContainer,
        image,
        input,
        helperWrapper,
        errorHelpText,
        helpText,
    } = makeStyles(colors);

    return (
        <View style={wrapper}>
            <View style={[container, shadows.inputShadow, isError ? errorContainer : {}]}>
                {icon && <Image style={image} source={icon} />}
                <TextInputNative style={input} {...textInputProps} />
            </View>

            {!!helperText && (
                <View style={helperWrapper}>
                    <Text style={[helpText, isError ? errorHelpText : {}]}>{helperText}</Text>
                </View>
            )}
        </View>
    );
};

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
    StyleSheet.create({
        wrapper: {
            display: 'flex',
            flexDirection: 'column',
        },

        container: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: colors.white,
            width: '100%',
            borderColor: '#DCDCDC',
            borderWidth: 1,
            borderRadius: 50,
            minHeight: 35,
            padding: 9,
        },

        errorContainer: {
            borderColor: colors.error,
        },

        image: {
            width: 27,
            height: 27,
            marginRight: 10,
        },

        input: {
            width: '100%',
            paddingLeft: 0,
            color: '#424242',
            fontSize: 18,
            lineHeight: 19,
            fontWeight: '400',
        },

        helperWrapper: {
            paddingLeft: 20,
            marginTop: 2,
        },

        errorHelpText: {
            color: colors.error,
        },

        helpText: {
            color: colors.secondaryText,
            fontSize: 15,
        },
    });

export default TextInput;