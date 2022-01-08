import React, { FC, ReactNode } from 'react';
import BottomMarkPage from 'modules/common/components/BottomMarkPage';
import { useTheme } from 'react-native-paper';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

interface IProps {
    children: ReactNode;
}

const AuthDrawer: FC<IProps> = ({ children }) => {
    const theme = useTheme();
    const { container, background } = makeStyles(theme);

    return (
        <BottomMarkPage style={{ backgroundColor: theme.colors.white, position: 'relative' }}>
            <Image
                style={background}
                resizeMode="stretch"
                importantForAccessibility="yes"
                source={require('assets/png/books-background.jpg')}
            />

            <View style={container}>{children}</View>
        </BottomMarkPage>
    );
};

const win = Dimensions.get('window');

const makeStyles = ({ colors }: ReactNativePaper.Theme) =>
    StyleSheet.create({
        container: {
            padding: 32,
            paddingTop: 32,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            flex: 1,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginTop: '42%',
            backgroundColor: colors.white,
        },

        background: {
            width: win.width,
            flex: 1,
            maxHeight: win.height - 520,
            position: 'absolute',
        },
    });

export default AuthDrawer;
