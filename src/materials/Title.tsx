import React, { FC, ReactNode } from 'react';
import { Title as PaperTitle, useTheme } from 'react-native-paper';
import { StyleProp, TextProps, TextStyle } from 'react-native';

interface IProps extends TextProps {
    children: ReactNode;
}

const Title: FC<IProps> = ({ children, style, ...props }) => {
    const { colors } = useTheme();

    return (
        <PaperTitle style={[makeStyles(colors), style]} {...props}>
            {children}
        </PaperTitle>
    );
};

const makeStyles = (colors: ReactNativePaper.ThemeColors): StyleProp<TextStyle> => ({
    color: colors.primaryText,
    fontWeight: '400',
    fontSize: 24,
});

export default Title;
