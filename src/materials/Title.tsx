import React, { FC, ReactNode } from 'react';
import { Title as PaperTitle, useTheme } from 'react-native-paper';
import { StyleProp, TextProps, TextStyle } from 'react-native';

interface IProps extends TextProps {
    children: ReactNode;
}

const Title: FC<IProps> = ({ children, style, ...props }) => {
    const theme = useTheme();

    return (
        <PaperTitle style={[style, makeStyles(theme)]} {...props}>
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
