import React, { CSSProperties, FC, ReactNode } from 'react';
import { StyleProp, StyleSheet } from 'react-native';
import { View } from 'react-native';
import BookStoreSplashLogo from 'assets/svg/BookStoreSplashLogo';

interface IProps {
    children: ReactNode;
    style?: StyleProp<any>;
}

const BottomMarkPage: FC<IProps> = ({ children: Children, style }) => {
    return (
        <View style={[styles.container, style]}>
            <View style={styles.content}>{Children}</View>

            <BookStoreSplashLogo />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: 32,
    },
    content: {
        flex: 1,
        width: '100%',
        minHeight: 540,
    },
});

export default BottomMarkPage;
