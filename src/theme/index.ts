import { configureFonts, DefaultTheme } from 'react-native-paper';
import { Montserrat } from 'constants/fonts';
import { Font, Fonts } from 'react-native-paper/src/types';

declare global {
    namespace ReactNativePaper {
        interface ThemeColors {
            white: string;
            primaryText: string;
            secondaryText: string;
            dark: string;
            button: string;
            transparent: string;
            error: string;
        }

        interface ThemeFonts {
            black: ThemeFont;
            extraBold: ThemeFont;
            bold: ThemeFont;
            semiBold: ThemeFont;
        }
    }
}

const fontConfig: Record<string, ReactNativePaper.ThemeFonts> = {
    web: {
        black: {
            fontFamily: Montserrat.Black,
            fontWeight: '800',
        },
        extraBold: {
            fontFamily: Montserrat.ExtraBold,
            fontWeight: '800',
        },
        bold: {
            fontFamily: Montserrat.Bold,
            fontWeight: '700',
        },
        semiBold: {
            fontFamily: Montserrat.SemiBold,
            fontWeight: '600',
        },
        medium: {
            fontFamily: Montserrat.Medium,
            fontWeight: '500',
        },
        regular: {
            fontFamily: Montserrat.Regular,
            fontWeight: '400',
        },
        light: {
            fontFamily: Montserrat.Light,
            fontWeight: '300',
        },
        thin: {
            fontFamily: Montserrat.Light,
            fontWeight: '300',
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
        error: '#ec5c49',
    },

    fonts: configureFonts(fontConfig) as ReactNativePaper.ThemeFonts,
};
