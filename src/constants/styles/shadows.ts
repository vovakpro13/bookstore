import { StyleSheet } from 'react-native';

export const shadows = StyleSheet.create({
    inputShadow: {
        shadowColor: '#dadada',
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.01,
        shadowRadius: 4,

        elevation: 6,
    },
});
