// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@element-plus/nuxt',
    '@vueuse/nuxt',
    'vue-yandex-maps/nuxt',
    'nuxt-gtag'
  ],
  devtools: { enabled: true },

  gtag: {
    id: 'G-EH8ERRNZDN',
    enabled: process.env.NODE_ENV === 'production'
  },

  app: {
    head: {
      title: 'Доставка цветов в Махачкале. Заказать букет в Magas Flowers',
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&display=swap' },
      ],
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    },
  },

  yandexMaps: {
    apikey: 'fe5ec8c5-05a9-48c7-ab2d-9f764852b76a',
  },

  css: [
    '@/app/styles/main.scss'  // обычные глобальные стили, если есть
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@/app/styles/index.scss" as *;`
        }
      }
    }
  },

  dir: {
    public: 'app/public',
    layouts: 'app/layouts',
    plugins: 'app/plugins',
  },

  srcDir: 'src',
  compatibilityDate: '2024-11-01',

  runtimeConfig: {
    public: {
      baseUrl: process.env.VUE_APP_BASE_URL,
      brandSlug: process.env.VUE_APP_BRAND_SLUG
    }
  }
})
