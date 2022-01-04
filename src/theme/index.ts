import { configureFonts, DefaultTheme } from 'react-native-paper';
import { Montserrat } from 'constants/fonts';

declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            white: string;
            primaryText: string;
            secondaryText: string;
            dark: string;
            button: string;
            transparent: string;
        }
    }
}

const fontConfig: any = {
    web: {
        regular: {
            fontFamily: Montserrat.Regular,
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: Montserrat.Medium,
            fontWeight: 'normal',
        },
        light: {
            fontFamily: Montserrat.Light,
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: Montserrat.Light,
            fontWeight: 'normal',
        },
    },
};
fontConfig.ios = fontConfig.web;
fontConfig.android = fontConfig.web;

export const theme: ReactNativePaper.Theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#3AAAFC',
        background: '#F4F4F4',

        primaryText: '#353535',
        secondaryText: '#848484',

        dark: '#101010',
        button: '#D2D2D2',
        transparent: '#F4F4F4',
        white: '#FFFFFF',
    },

    fonts: configureFonts(fontConfig),
};
