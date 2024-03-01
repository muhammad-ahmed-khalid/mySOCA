module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@Component': './src/component',
          '@Utility': './src/utility',
          '@Service': './src/services',
          '@Navigator': './src/navigators',
          '@Validation': './src/validationSchema',
          '@Context': './src/contexts',
          '@Constants': './src/constants',
          '@Theme': './src/themes',
          '@Api': './src/APIServices',
          '@ReusableFunctions': './src/reusableFunctions',
          '@Container': './src/containers',
          '@Asset': './src/assets',
          '@Hook': './src/hooks',
          '@Store': './src/stores',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
