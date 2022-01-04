import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import BookStoreSplashLogo from 'assets/svg/BookStoreSplashLogo';

interface IProps {
    children: ReactNode;
}

const BottomMarkPage: FC<IProps> = ({ children: Children }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>{Children}</View>

            <View>
                <BookStoreSplashLogo />
            </View>
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
    },
});

export default BottomMarkPage;
