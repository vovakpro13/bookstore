module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['module:metro-react-native-babel-preset'],
        env: {
            production: {
                plugins: ['react-native-paper/babel'],
            },
        },
        plugins: [
            [
                'module-resolver',
                {
                    extensions: [
                        '.js',
                        '.jsx',
                        '.ts',
                        '.tsx',
                        '.android.js',
                        '.android.tsx',
                        '.ios.js',
                        '.ios.tsx',
                    ],
                    root: ['./src'],
                },
            ],
        ],
    };
};
