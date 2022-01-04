import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from 'modules/sign-in';
import { useTheme } from 'react-native-paper';

const Stack = createNativeStackNavigator();

const Navigator = () => {
    const { colors } = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignIn"
                screenOptions={{
                    headerShown: false,
                    contentStyle: { backgroundColor: colors.background },
                }}
            >
                <Stack.Screen name="SignIn" component={SignIn} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
