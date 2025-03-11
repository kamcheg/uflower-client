import { createConfigForNuxt } from '@nuxt/eslint-config/flat'

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: false,
      indent: 2,
      quotes: 'single',
    },
  },
})
  .override('nuxt/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  })
