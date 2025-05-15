# Этап сборки
FROM node:20-alpine AS builder

# Создаём рабочую директорию
WORKDIR /app

# Копируем package*.json отдельно для кэширования установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы проекта
COPY . .

# Сборка Nuxt-приложения
RUN npm run build

# Этап запуска (production)
FROM node:20-alpine AS runner

WORKDIR /app

# Копируем собранный output и зависимости из builder
COPY --from=builder /app/.output .output
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules

# Настройка переменных среды
ENV NODE_ENV=production
ENV NUXT_PORT=3000
ENV HOST=0.0.0.0

# Открываем порт
EXPOSE 3000

# Запуск Nuxt-приложения
CMD ["node", ".output/server/index.mjs"]
