import React, { FC, ReactNode } from 'react';
import { Button, useTheme } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

type IProps = React.ComponentProps<typeof Button> & {
    children: ReactNode;
};

const PrimaryButton: FC<IProps> = ({ children, ...props }) => {
    const { colors } = useTheme();
    const { container, text } = makeStyles(colors);

    return (
        <Button style={container} mode="contained" uppercase={false} {...props}>
            <Text style={text}>{children}</Text>
        </Button>
    );
};

const makeStyles = (colors: ReactNativePaper.ThemeColors) =>
    StyleSheet.create({
        container: {
            borderRadius: 50,
            backgroundColor: colors.primary,
            minHeight: 40,
        },
        text: {
            fontSize: 19,
            color: colors.white,
            fontWeight: '400',
            paddingVertical: 10,
            height: '100%',
        },
    });
export default PrimaryButton;
