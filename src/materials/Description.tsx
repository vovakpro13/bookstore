import React, { FC, ReactNode } from 'react';
import { Title as PaperTitle, useTheme } from 'react-native-paper';
import { StyleProp, TextProps, TextStyle } from 'react-native';

interface IProps extends TextStyle {
    children: ReactNode;
    TextProps?: TextProps;
}

const Description: FC<IProps> = ({ children, TextProps, ...styles }) => {
    const theme = useTheme();

    return (
        <PaperTitle style={[makeStyles(theme), styles]} {...TextProps}>
            {children}
        </PaperTitle>
    );
};

const makeStyles = ({ colors, fonts }: ReactNativePaper.Theme): StyleProp<TextStyle> => ({
    color: colors.dark,
    fontFamily: fonts.regular.fontFamily,
    fontSize: 15,
    lineHeight: 21,
});

export default Description;
