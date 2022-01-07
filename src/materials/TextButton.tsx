import React, { FC, ReactNode } from 'react';
import { useTheme } from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type IProps = React.ComponentProps<typeof TouchableOpacity> & {
    children: ReactNode;
};

const TextButton: FC<IProps> = ({ children, ...props }) => {
    const theme = useTheme();
    const { container, text } = makeStyles(theme);

    return (
        <TouchableOpacity style={container} {...props}>
            <Text style={text}>{children}</Text>
        </TouchableOpacity>
    );
};

const makeStyles = ({ colors, fonts }: ReactNativePaper.Theme) =>
    StyleSheet.create({
        container: {
            borderRadius: 50,
            backgroundColor: 'transparent',
            paddingVertical: 8,
            width: '100%',
            alignItems: 'center',
        },
        text: {
            fontSize: 15,
            color: colors.primaryText,
            fontFamily: fonts.regular.fontFamily,
        },
    });

export default TextButton;
