# ---------- STAGE 1: BUILD REACT ----------
FROM node:22-alpine AS builder 

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .


# Собираем проект
RUN npm run build

# Второй этап — запускаем сервер из готового билда
FROM node:20-alpine

WORKDIR /app

# Устанавливаем простой http сервер для отдачи статики (можно заменить на свой)
RUN npm install -g serve

# Копируем билд из предыдущего этапа
COPY --from=builder /app/dist ./dist

# Запускаем сервер на 4173 порту
CMD ["serve", "-s", "dist", "-l", "4173"]