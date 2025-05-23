// @ts-check
export default [
  {
    // Ignorar archivos generados automáticamente y node_modules
    ignores: [
      '.nuxt/**',
      'node_modules/**',
      'dist/**',
      '.output/**'
    ]
  },
  {
    // Reglas básicas para todos los archivos
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn'
    }
  }
];
