// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: ['@pinia/nuxt', '@nuxt/eslint', '@element-plus/nuxt'],
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap' },
      ],
    },
  },

  dir: {
    public: 'app/public',
    layouts: 'app/layouts',
  },

  srcDir: 'src',
  compatibilityDate: '2024-11-01',
})
