import React, { FC } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StatusBar, Text } from 'react-native';
import Navigator from 'navigator';
import { theme } from 'theme';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { Montserrat } from 'constants/fonts';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from 'redux/store';

const App: FC = () => {
    const [fontsLoaded] = useFonts({
        [Montserrat.Light]: require('./assets/fonts/Montserrat-Light.ttf'),
        [Montserrat.Regular]: require('./assets/fonts/Montserrat-Regular.ttf'),
        [Montserrat.Medium]: require('./assets/fonts/Montserrat-Medium.ttf'),
        [Montserrat.SemiBold]: require('./assets/fonts/Montserrat-SemiBold.ttf'),
        [Montserrat.Bold]: require('./assets/fonts/Montserrat-Bold.ttf'),
        [Montserrat.ExtraBold]: require('./assets/fonts/Montserrat-ExtraBold.ttf'),
        [Montserrat.Black]: require('./assets/fonts/Montserrat-Black.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Provider store={store}>
            <PersistGate loading={<Text>Store loading</Text>} persistor={persistor}>
                <PaperProvider theme={theme}>
                    <StatusBar />
                    <Navigator />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
};

export default App;
