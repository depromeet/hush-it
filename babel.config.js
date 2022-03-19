module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '~': './src',
          '@components': './src/components',
          '@constants': './src/constants',
          '@navigations': './src/navigations',
          '@screens': './src/screens',
          '@server': './src/server',
          '@utils': './src/utils',
          '@stores': './src/stores',
        },
      },
    ],
    [
      'dotenv-import',
      {
        moduleName: '@env',
        path: '.env',
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: false,
      },
    ],
    // ['@babel/plugin-proposal-class-properties', { loose: true }], // Cannot use with storybook
    ['transform-inline-environment-variables'],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
