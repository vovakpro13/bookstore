import React, { FC, ReactNode } from 'react';
import { useTheme } from 'react-native-paper';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type IProps = React.ComponentProps<typeof TouchableOpacity> & {
    children: ReactNode;
};

const PrimaryButton: FC<IProps> = ({ children, ...props }) => {
    const { container, text } = makeStyles(useTheme());

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
            backgroundColor: colors.primary,
            minHeight: 40,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
        },
        text: {
            fontSize: 15,
            color: colors.white,
            fontFamily: fonts.regular.fontFamily,
        },
    });

export default PrimaryButton;
