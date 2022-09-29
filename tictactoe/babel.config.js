module.exports = {
  'plugins': [
    [
      '@babel/plugin-proposal-class-properties',
      {
        'loose': true
      }
    ]
  ],
  'presets': [
    [
      '@babel/preset-env',
      {
        'targets': {
          'chrome': 61,
          'ie': 11
        },
        'modules': false,
        'useBuiltIns': 'usage'
      },
    ],
    '@babel/preset-react'
  ],
  'env': {
    'production': {},
    'development': {},
    'test': {},
  }
}
