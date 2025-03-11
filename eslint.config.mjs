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
      // Разрешается называть компонент одним словом
      'vue/multi-word-component-names': 'off',
    },
  })
