import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: false,
      indent: 2, // 4 or 'tab'
      quotes: 'single',
      // ... and more
    },
  },
})
  .override('nuxt/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  })
