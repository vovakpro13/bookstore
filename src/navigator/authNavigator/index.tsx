import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthRoutes } from './authRoutes';
import SignIn from 'modules/sign-in';
import AuthDrawer from 'modules/common/components/AuthDrawer';
import { useTheme } from 'react-native-paper';
import Registration from 'modules/registration';
import ResetPassword from 'modules/reset-password';

const AuthNavigator = () => {
    const { colors } = useTheme();
    const AuthTabs = createNativeStackNavigator();

    return (
        <AuthDrawer>
            <AuthTabs.Navigator
                initialRouteName={AuthRoutes.SignIn}
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.white },
                }}
            >
                <AuthTabs.Screen name={AuthRoutes.SignIn} component={SignIn} />

                <AuthTabs.Screen
                    name={AuthRoutes.Registration}
                    component={Registration}
                    options={{ animationTypeForReplace: 'push' }}
                />

                <AuthTabs.Screen
                    name={AuthRoutes.ForgotPassword}
                    component={ResetPassword}
                    options={{ animationTypeForReplace: 'push' }}
                />
            </AuthTabs.Navigator>
        </AuthDrawer>
    );
};

export default AuthNavigator;
