import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'modules/sign-in';
import { useTheme } from 'react-native-paper';
import { AppRoutes } from 'navigator/appRoutes';
import Registration from 'modules/registration';
import { useSelector } from 'react-redux';
import { selectAccessToken } from 'redux/slices/auth';
import AuthNavigator from './authNavigator';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    const { colors } = useTheme();
    const accessToken = useSelector(selectAccessToken);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={AppRoutes.Auth}
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.background },
                }}
            >
                {accessToken === null ? (
                    <>
                        <Stack.Screen name={AppRoutes.Auth} component={AuthNavigator} />
                    </>
                ) : (
                    <></>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
