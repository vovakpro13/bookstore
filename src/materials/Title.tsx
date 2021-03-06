import React, { FC, ReactNode } from 'react';
import { Title as PaperTitle, useTheme } from 'react-native-paper';
import { StyleProp, TextProps, TextStyle } from 'react-native';

interface IProps extends TextStyle {
    children: ReactNode;
    TextProps?: TextProps;
}

const Title: FC<IProps> = ({ children, TextProps, ...styles }) => {
    const theme = useTheme();

    return (
        <PaperTitle style={[makeStyles(theme), styles]} {...TextProps}>
            {children}
        </PaperTitle>
    );
};

const makeStyles = ({ colors, fonts }: ReactNativePaper.Theme): StyleProp<TextStyle> => ({
    color: colors.primaryText,
    fontFamily: fonts.medium.fontFamily,
    fontSize: 28,
});

export default Title;
