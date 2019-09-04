module.exports = ({
  useBuiltIns = 'entry',
  transformRuntime = false,
} = {}) => ({
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 10,
        },
        modules: 'commonjs',
        loose: true,
        useBuiltIns,
        shippedProposals: true,
        corejs: { version: 3, proposals: true },
        // "corejs": 3
      },
    ],
    // typescript
    '@babel/typescript',
  ],
  plugins: [
    transformRuntime && [
      '@babel/plugin-transform-runtime',
      {
        corejs: { version: 3, proposals: true },
        useESModules: false,
      },
    ],
    // Stage 2
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',

    // Stage 3
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    ['@babel/plugin-proposal-class-properties', { loose: false }],
    '@babel/plugin-proposal-json-strings',
  ].filter((plugin) => !!plugin),
});
