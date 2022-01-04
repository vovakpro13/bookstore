import { NativeModules, Platform } from 'react-native';
import { Languages } from 'constants/languages';

export const getDeviceLanguage = () =>
    (Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
        : NativeModules.I18nManager.localeIdentifier
    ).slice(0, 2) as Languages;
